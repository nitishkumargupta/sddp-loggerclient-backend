# app/middleware/camel_case_middleware.rb
class CamelCaseMiddleware
  def initialize(app)
    @app = app
  end

  def call(env)
    status, headers, response = @app.call(env)

    if headers['Content-Type']&.include?('application/json')
      response_body = JSON.parse(response.body)

      camel_cased_body = deep_transform_keys(response_body) do |key|
        key.to_s.camelize(:lower)
      end

      response = [camel_cased_body.to_json]
      headers['Content-Length'] = response.first.bytesize.to_s
    end

    [status, headers, response]
  end

  private

  def deep_transform_keys(obj, &block)
    case obj
    when Hash
      obj.each_with_object({}) do |(key, value), result|
        result[yield(key)] = deep_transform_keys(value, &block)
      end
    when Array
      obj.map { |value| deep_transform_keys(value, &block) }
    else
      obj
    end
  end
end
