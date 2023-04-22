require_relative '../../app/services/kafka_consumer'

Rails.application.config.after_initialize do
  consumer = KafkaConsumer.new('http-log')
  Thread.new { consumer.run }
end