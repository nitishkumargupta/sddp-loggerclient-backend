# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

- Ruby version

- System dependencies

- Configuration

- Database creation

- Database initialization

- How to run the test suite

- Services (job queues, cache servers, search engines, etc.)

- Deployment instructions

- ...

To run app you need:

- Rake secret
  ```sh
  rake secret
  ```
- Copy the key

  ```sh
  EDITOR='nano' rails credentials:edit
  ```

- Paste the key to look like this

  ```sh
  devise:
    jwt_secret_key: <rake secret key>
  ```

- Run migrate

  ```sh
  rake db:migrate
  ```

- Run database seed

  ```sh
  rake db:seed
  ```

- Install Redis
  - on Mac
  ```sh
  brew install redis
  ```
  - start redis server
  ```sh
  brew services start redis
  ```
- Start sidekiq server
  - Run this command in root directory
  ```sh
  sidekiq
  ```

- Start Kafka docker image
  ```sh
  sudo docker-compose -f docker/kafka.yml up -d
  ```

- Start Elastic docker image
  ```sh
  sudo docker-compose -f docker/elasticsearch.yml up -d
  ```