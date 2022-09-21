# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# puts "clearing db..."

# Makeup.destroy_all
# Review.destroy_all
# User.destroy_all

Faker::Lorem.unique.clear
Faker::Name.unique.clear
Faker::Address.unique.clear
Faker::Internet.unique.clear
Faker::FunnyName.unique.clear
Faker::Device.unique.clear




response = RestClient.get("https://makeup-api.herokuapp.com/api/v1/products.json")
makeup_array = JSON.parse(response)

puts "Making makeup..."
 makeup_array.each do |makeup|
    Makeup.create!(
        name: makeup["name"],
        product_type: makeup["product_type"], 
        category: makeup["category"], 
        brand: makeup["brand"], 
        currency: makeup["currency"], 
        price: makeup["price"], 
        description: makeup["description"], 
        image: makeup["api_featured_image"], 
        product_colors: makeup["product_colors"]
        ) 
end 


puts "Making users..."
5.times {User.create(username:Faker::FunnyName.unique.name,
                     email:Faker::Internet.unique.email,
                     password:Faker::Device.unique.serial)}


puts "Making reviews..."
20.times {Review.create!(rating: rand(1..10),
                    description: Faker::Lorem.unique.paragraph,
                    username: Faker::Name.unique.initials,
                    location: Faker::Address.unique.state,
                    user: User.all.sample,
                    makeup: Makeup.all.sample
                    )}



