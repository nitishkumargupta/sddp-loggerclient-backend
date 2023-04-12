# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

To run app you need:

* Rake secret
  ```sh
  rake secret
  ```
* Copy the key

  ```sh
  EDITOR='nano' rails credentials:edit
  ```

* Paste the key to look like this

  ```sh
  devise:
    jwt_secret_key: <rake secret key>
  ```

* Run migrate
  ```sh
  rake db:migrate
  ```


* Run database seed
  ```sh
  rake db:seed
  ```




  
