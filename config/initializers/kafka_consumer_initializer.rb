require_relative '../../app/services/kafka_consumer'

Rails.application.config.after_initialize do
  consumer = KafkaConsumer.new('http-logs')
  Thread.new { consumer.run }
end
