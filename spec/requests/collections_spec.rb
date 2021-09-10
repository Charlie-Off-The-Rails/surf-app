require 'rails_helper'
require 'pry'

RSpec.describe "Collections", type: :request do
  describe "GET /index" do

    let (:user_attributes){
      {
        user_name: "test user",
        email: "test.user@mail.com",
        password:"123456",
        password_confirmation:"123456"
      }
    }
    it "gets nothing if user is not signed in" do 

      user = User.create(user_attributes)
      
      collection_attributes = {
        name:'Saturday', 
        description: 'My favorite spots for Saturday', 
        priority: 5
      }

      collection = user.collections.create(collection_attributes)


      get '/collections'
      #expect 302

      expect(response).to have_http_status(302)
    end
    
    it "gets a list of a user's collections" do

      #Arrange

      user = User.create(user_attributes)
      
      collection_attributes = {
        name:'Saturday', 
        description: 'My favorite spots for Saturday', 
        priority: 5
      }

      collection = user.collections.create(collection_attributes)

      #get our user signed
      sign_in user
      # binding.pry
      # puts current_user



      #Act
      #make our request for collections
      get '/collections'

      collections = JSON.parse(response.body)


    
      #Assert
      # expect (compare our collections lists)
      expect(response).to have_http_status(200)
      expect(collections.length).to eq 1
      expect(collections[0]["name"]).to include "Saturday"


    end


    
    
  end
end
