require 'swagger_helper'

RSpec.describe 'users/sessions', type: :request do

  path '/users/sign_in' do

    post('create session') do
      consumes 'application/json'
      parameter name: :user, in: :body, schema: {
        type: :object,
        properties: {
          email: { type: :string },
          password: { type: :string }
        },
        required: true,
        example: { email: "test@example.com", password: "12345678" }
      }
      response(200, 'successful') do
        produces 'application/json'
        schema type: :object,
               properties: {
                 message: { type: :string },
                 id_token: { type: :string }
               },
               example: { message: "You are logged in.", id_token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjc4OTA4MTMyLCJleHAiOjE2Nzg5MTE3MzIsImp0aSI6ImRjYTMwNWUxLWJlNjMtNDNjMi04ZWZmLWZkM2I1MGQ4NTcwMCJ9.mEp5ME7MNBSC_io1DUZdYBJIMQqE497bz9LOIrZJs3g" }

        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end
        run_test!
      end

      response(401, 'unauthorized') do
        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end
        run_test!
      end
    end
  end

  path '/users/sign_out' do

    delete('delete session') do
      security [BearerAuth: []]

      response(200, 'successful') do
        produces 'application/json'
        schema type: :object,
               properties: {
                 message: { type: :string }
               },
               example: { message: "You are logged out." }

        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end
        run_test!
      end

      response(401, 'unauthorized') do
        produces 'application/json'
        schema type: :object,
               properties: {
                 message: { type: :string }
               },
               example: { message: "Hmm nothing happened." }

        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end
        run_test!
      end
    end
  end
end
