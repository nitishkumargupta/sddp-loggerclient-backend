require 'rdkafka'

class KafkaConsumer
  def initialize(topic)
    @topic = topic
    @config = {
      'bootstrap.servers': 'localhost:9092', # Replace with your Kafka broker addresses
      'group.id': 'rails-kafka-consumer',
      'auto.offset.reset': 'earliest'
    }
  end

  def run
    consumer = Rdkafka::Config.new(@config).consumer
    consumer.subscribe(@topic)

    puts "Starting to consume messages from #{@topic}"

    consumer.each do |message|
      if message
        puts "Received message: #{message.payload} at offset #{message.offset}"
        # Process the message here, e.g., save it to the database or perform other actions
      end
    end
  end

end
