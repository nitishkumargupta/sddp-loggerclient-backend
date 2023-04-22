source "https://rubygems.org"
git_source(:github) { |repo| "git@github.com:#{repo}.git" }

ruby "3.2.1"

# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem "rails", "~> 7.0.4", ">= 7.0.4.2"

gem 'ransack'
gem 'rdkafka'
gem 'devise'
gem 'devise-jwt'
gem 'rack-cors'
# Use sqlite3 as the database for Active Record
# gem "sqlite3", "~> 1.4"
gem "mysql2"
gem "figaro"
gem 'groupdate'

gem "rswag"
# gem "application_server_management", path: '/Users/nitish/SHU/System Design/application_server_management'
gem "application_server_management", github: 'nitishkumargupta/application_server_management', branch: 'main'

# Use the Puma web server [https://github.com/puma/puma]
gem "puma", "~> 5.0"
# Build JSON APIs with ease [https://github.com/rails/jbuilder]
# gem "jbuilder"

# Use Redis adapter to run Action Cable in production
# gem "redis", "~> 4.0"

# Use Kredis to get higher-level data types in Redis [https://github.com/rails/kredis]
# gem "kredis"

# Use Active Model has_secure_password [https://guides.rubyonrails.org/active_model_basics.html#securepassword]
# gem "bcrypt", "~> 3.1.7"

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]

# Reduces boot times through caching; required in config/boot.rb
gem "bootsnap", require: false

gem 'will_paginate', '~> 3.3', '>= 3.3.0'

# Use Active Storage variants [https://guides.rubyonrails.org/active_storage_overview.html#transforming-images]
# gem "image_processing", "~> 1.2"

# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
# gem "rack-cors"

group :development, :test do
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem "debug", platforms: %i[ mri mingw x64_mingw ]
  gem "rspec-rails"
  gem "rswag-specs"
  gem 'rubocop'
end

group :development do
  gem 'letter_opener'

  # Speed up commands on slow machines / big apps [https://github.com/rails/spring]
  # gem "spring"
end

gem "sidekiq", "~> 7.0"