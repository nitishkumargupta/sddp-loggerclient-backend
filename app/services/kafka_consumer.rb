require 'rdkafka'

class KafkaConsumer
  def initialize(topic)
    @topic = topic
    @config = {
      'bootstrap.servers': 'localhost:9092', # Replace with your Kafka broker addresses
      'group.id': 'http-logs-group',
      'auto.offset.reset': 'latest'
    }
  end

  def run
    consumer = Rdkafka::Config.new(@config).consumer
    consumer.subscribe(@topic)

    puts "Starting to consume messages from #{@topic}"

    consumer.each do |message|
      if message
        puts "Received message: #{message.payload} at offset #{message.offset}"
        begin
          # save_http_log(message.payload)
        rescue => e
          puts "Error processing message: #{e.message}"
        end
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