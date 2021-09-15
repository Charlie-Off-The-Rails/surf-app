require 'rails_helper'

RSpec.describe "CollectionSpots", type: :request do
  describe "POST /create" do
    let (:user_attributes){
      {
        user_name: "test user",
        email: "test.user@mail.com",
        password:"123456",
        password_confirmation:"123456"
      }
    }

      it "Creates a new collectionSpot" do

        user = User.create(user_attributes)
        sign_in user


        collection_attributes = {
          name: "Saturday Spots",
          description: "My favorite spots to surf on Saturday",
          priority: "3"
        }
        collection = user.collections.create(collection_attributes)

        spot_attributes = { 
          name: 'Sunset Cliffs', 
          description: 'Surf spot for Sunst Cliffs', 
          easy_parking: false, 
          bottom: 'rock', 
          latitude: 32.719421, 
          longitude: -117.257337, 
          wind_direction: 45, 
          swell_direction: 293, 
          surf_height_min: 4.0, 
          surf_height_max: 12.0,
          tide: 'low'
        }
        spot = Spot.create(spot_attributes)


        collection_spot_params = {
          collection_spot:{
            collection_id: collection.id,
            spot_id: spot.id
          }
        }

        post "/collection_spots", params: collection_spot_params
        collection_spot = JSON.parse(response.body)

        expect(response).to have_http_status(200)
        expect(collection_spot["spot_id"]).to eq(spot.id)

      end

    it "Creates a new collectionSpot" do

      user = User.create(user_attributes)
      sign_in user


      collection_attributes = {
        name: "Saturday Spots",
        description: "My favorite spots to surf on Saturday",
        priority: "3"
      }
      collection = user.collections.create(collection_attributes)

      spot_attributes = { 
        name: 'Sunset Cliffs', 
        description: 'Surf spot for Sunst Cliffs', 
        easy_parking: false, 
        bottom: 'rock', 
        latitude: 32.719421, 
        longitude: -117.257337, 
        wind_direction: 45, 
        swell_direction: 293, 
        surf_height_min: 4.0, 
        surf_height_max: 12.0,
        tide: 'low'
      }
      spot = Spot.create(spot_attributes)


      collection_spot_params = {
        collection_spot:{
          collection_id: collection.id,
          spot_id: spot.id
        }
      }

      post "/collection_spots", params: collection_spot_params

      post "/collection_spots", params: collection_spot_params
      collection_spot = JSON.parse(response.body)
      puts collection_spot
      expect(response).to have_http_status(422)
      expect(CollectionSpot.count).to eq 1

    end
  end




end
