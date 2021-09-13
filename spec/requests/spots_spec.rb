require 'rails_helper'

RSpec.describe "Spots", type: :request do
  describe "GET /index" do
    it "makes a get request to /spots" do
      spot_attributes = { 
        name: 'San Miguel', 
        description: 'Surf spot for San Miguel', 
        easy_parking: true, 
        bottom: 'rock', 
        latitude: 32.088172, 
        longitude: -116.884867, 
        wind_direction: 35, 
        swell_direction: 290, 
        surf_height_min: 3.0, 
        surf_height_max: 8.0,
        tide: 'high'
    }

    s = Spot.create(spot_attributes)
    get "/spots"
    spot_response = JSON.parse(response.body)
    expect(response).to have_http_status(200)
    expect(spot_response.length).to eq 1
    end


  end
end
