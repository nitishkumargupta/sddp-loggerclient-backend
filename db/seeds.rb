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


authority_names = ['ROLE_USER', 'ROLE_ADMIN', 'ROLE_ORGANIZATION_ADMIN', 'ROLE_DEVELOPER', 'ROLE_TESTER', 'ROLE_DEVOPS']

authority_names.each do |name|
  Authority.create!(name: name)
end

application_servers = ApplicationServerManagement::ApplicationServer.all

http_logs = 4.times.map do |i|
  {
    request_timestamp: Time.now - i.hours,
    http_method: "GET",
    request_url: "/api/v1/users",
    http_status_code: "200",
    remote_ip_address: "192.168.1.1",
    duration: 100 + i * 10,
    request_headers: "{}",
    response_headers: "{}",
    request_url_parameters: "{}",
    request_body: "{}",
    request_cookies: "{}",
    response_cookies: "{}"
  }
end

application_servers.each do |application_server|
  http_logs.each do |http_log|
    HttpLog.create!(http_log.merge(application_id: application_server.id))
  end
end

organisations_data = [
  {
    name: 'Organisation 1',
    code: 'ORG1',
    address: '123 Main St',
    email: 'org1@example.com'
  },
  {
    name: 'Organisation 2',
    code: 'ORG2',
    address: '456 Main St',
    email: 'org2@example.com'
  },
# Add more organisation data here
]

50.times do |n|
  org_data = organisations_data[n % organisations_data.length].dup
  org_data[:name] = "#{org_data[:name]} #{n+1}"
  org_data[:code] = "#{org_data[:code]} #{n+1}"
  org_data[:email] = "#{n+1} #{org_data[:email]}"
  Organisation.create!(org_data)
end


