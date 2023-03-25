# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)



names = ['Server 1', 'Server 2', 'Server 3', 'Server 4', 'Server 5', 'Server 6', 'Server 7', 'Server 8', 'Server 9', 'Server 10']
codes = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S10']

names.each_with_index do |name, index|
  ApplicationServerManagement::ApplicationServer.create!(
    name: name,
    code: codes[index],
    description: "Description for #{name}"
  )
end


authority_names = ['ROLE_USER', 'ROLE_ADMIN']

authority_names.each do |name|
  Authority.create!(name: name)
end