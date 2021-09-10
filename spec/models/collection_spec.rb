require 'rails_helper'

RSpec.describe Collection, type: :model do
  


  it "requires a name" do 
    user = User.create(user_name: "test user",email: "test.user@mail.com",password:"123456",password_confirmation:"123456")    
    c = user.collections.create(description: "some description")

    expect(c.errors[:name]).to_not be_empty
  end

  it "requires a description" do 
    user = User.create(user_name: "test user",email: "test.user@mail.com",password:"123456",password_confirmation:"123456")    
    c = user.collections.create(name: "some description")

    expect(c.errors[:description]).to_not be_empty
  end


end
