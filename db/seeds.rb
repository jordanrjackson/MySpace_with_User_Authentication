30.times do
  author = Faker::TwinPeaks.character,
  comment = Faker::MichaelScott.quote,
  avatar = Faker::Avatar.image,
  date = Faker::Date.backward(14)
  likes = Faker::Number.between(1, 99)
  Post.create(author: author, comment: comment, avatar: avatar, date: date)
end
i = 1
10.times do
  name = Faker::Name.name
  email = "test#{i}@test.com"
  image = Faker::Avatar.image("my-own-slug")
  password = "password"
  password_confirmation = "password"
  User.create(name: name, email: email, image: image, password: password, password_confirmation: password, reset_password_token: nil)
  puts "Created user #{name}, #{email}"
  i += 1
end


puts 'Successfully seeded data.'