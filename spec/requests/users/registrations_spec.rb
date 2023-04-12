require 'swagger_helper'

RSpec.describe 'users/registrations', type: :request do

  path '/users' do
    post('create user') do
      consumes 'application/json'
      parameter name: :user, in: :body, schema: {
        type: :object,
        properties: {
          user: {
            type: :object,
            properties: {
              email: { type: :string },
              password: { type: :string }
            }
          }
        },
        required: true,
        example: { user: { email: "test@example.com", password: "12345678" } }
      }
      response(200, 'successful') do
        produces 'application/json'
        schema type: :object,
               properties: {
                 message: { type: :string }
               },
               example: { message: "Signed up sucessfully." }

        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end
        run_test!
      end

      response(422, 'not a valid request') do
        produces 'application/json'
        schema type: :object,
               properties: {
                 message: { type: :string }
               },
               example: { message: "Required fields are missing" }
        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end
        run_test!
      end

      response(409, 'user exists') do
        produces 'application/json'
        schema type: :object,
               properties: {
                 message: { type: :string }
               },
               example: { message: "User already exists. Please try with another email" }
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
