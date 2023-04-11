# app/enumerations/http_method.rb

class HttpMethod
  GET = 'GET'
  POST = 'POST'
  PUT = 'PUT'
  DELETE = 'DELETE'
  HEAD = 'HEAD'
  OPTIONS = 'OPTIONS'
  CONNECT = 'CONNECT'
  TRACE = 'TRACE'
  PATCH = 'PATCH'

  def self.all
    constants.map(&method(:const_get))
  end
end
