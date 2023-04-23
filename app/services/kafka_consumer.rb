# require 'rdkafka'
require 'kafka'

class KafkaConsumer
  def initialize(topic)
    @topic = topic
  end

  def run
    kafka = Kafka.new(['localhost:9092'])

    # Consumers with the same group id will form a Consumer Group together.
    consumer = kafka.consumer(group_id: "logger-client")
    consumer.subscribe(@topic)

    # Stop the consumer when the SIGTERM signal is sent to the process.
    # It's better to shut down gracefully than to kill the process.
    trap("TERM") { consumer.stop }

    # This will loop indefinitely, yielding each message in turn.
    consumer.each_message do |message|
      begin
        save_http_log(message.value)
      rescue => e
        puts "Error processing message: #{e.message}"
      end
    end
  end

  private

  def save_http_log(payload)
    parsed_payload = JSON.parse(payload)
    application_id = parsed_payload["application_id"]
    response_status_code = parsed_payload["http_status_code"]
    return until is_valid_application?(application_id)
    if check_for_alert?(response_status_code,application_id)
      SendAlertMailerJob.set(wait: 20.seconds).perform_later(application_id, parsed_payload)
    end
    http_log = HttpLog.new(parsed_payload)
    
    unless http_log.save
      SendMailToDevJob.set(wait: 1.seconds).perform_now(parsed_payload,http_log.errors.full_messages.join(', '))
    end
  end
  
  def is_valid_application?(application_id)
    return fetch_application_server(application_id).present?
  end
  
  def fetch_application_server(application_id)
    ApplicationServerManagement::ApplicationServer.find(application_id)
  end

  def check_for_alert?(response_status_code,application_id)
    application = fetch_application_server(application_id)
    return application.alert_response_codes.include?(response_status_code.to_s)
  end
end