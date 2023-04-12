require 'rdkafka'

class KafkaConsumer
  def initialize(topic)
    @topic = topic
    @config = {
      'bootstrap.servers': 'localhost:9092', # Replace with your Kafka broker addresses
      'group.id': 'kafka-consumer',
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
          save_http_log(message.payload)
        rescue => e
          puts "Error processing message: #{e.message}"
        end
      end
    end
  end

  private

  # TODO: Find another method as this one makes delays when there is an insert error
  def save_http_log(payload)
    parsed_payload = JSON.parse(payload)
    http_log = HttpLog.new(parsed_payload)

    # TODO: Find application by token not id to save it with the log

    if http_log.save
      puts "HttpLog saved with ID: #{http_log.id}"
    else
      puts "Failed to save HttpLog: #{http_log.errors.full_messages.join(', ')}"
    end
  end
end