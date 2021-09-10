require 'rails_helper'

RSpec.describe Spot, type: :model do
  it "requires a name" do
    spot_attributes = { 
      description: 'Surf spot for Scripps', 
      easy_parking: true, 
      bottom: 'sand', 
      latitude: 32.865747, 
      longitude: -117.255225, 
      wind_direction: 135, 
      swell_direction: 293, 
      surf_height_min: 3.0, 
      surf_height_max: 8.0,
      tide: 'low'
    }

    s = Spot.create(spot_attributes)
    expect(s.errors[:name]).to_not be_empty

  end

  it "requires a description" do
    spot_attributes = { 
      name: 'Surf spot for Scripps', 
      easy_parking: true, 
      bottom: 'sand', 
      latitude: 32.865747, 
      longitude: -117.255225, 
      wind_direction: 135, 
      swell_direction: 293, 
      surf_height_min: 3.0, 
      surf_height_max: 8.0,
      tide: 'low'
    }

    s = Spot.create(spot_attributes)
    expect(s.errors[:description]).to_not be_empty

  end


  it "requires an easy parking value" do
    spot_attributes = { 
      name: 'Surf spot for Scripps', 
      description: 'Surf spot for Scripps',
      bottom: 'sand', 
      latitude: 32.865747, 
      longitude: -117.255225, 
      wind_direction: 135, 
      swell_direction: 293, 
      surf_height_min: 3.0, 
      surf_height_max: 8.0,
      tide: 'low'
    }

    s = Spot.create(spot_attributes)
    expect(s.errors[:easy_parking]).to_not be_empty

  end


  it "requires a bottom value of either sand or rock" do
    spot_attributes = { 
      name: 'Surf spot for Scripps', 
      description: 'Surf spot for Scripps',
      bottom: "bad",
      easy_parking: true, 
      latitude: 32.865747, 
      longitude: -117.255225, 
      wind_direction: 135, 
      swell_direction: 293, 
      surf_height_min: 3.0, 
      surf_height_max: 8.0,
      tide: 'low'
    }

    s = Spot.create(spot_attributes)
    expect(s.errors[:bottom]).to_not be_empty

  end

  it "requires a latitude" do
    spot_attributes = { 
      name: 'Surf spot for Scripps', 
      description: 'Surf spot for Scripps',
      bottom: "bad",
      easy_parking: true, 
      longitude: -117.255225, 
      wind_direction: 135, 
      swell_direction: 293, 
      surf_height_min: 3.0, 
      surf_height_max: 8.0,
      tide: 'low'
    }

    s = Spot.create(spot_attributes)
    expect(s.errors[:latitude]).to_not be_empty

  end

  it "requires a longitude" do
    spot_attributes = { 
      name: 'Surf spot for Scripps', 
      description: 'Surf spot for Scripps',
      bottom: "bad",
      easy_parking: true, 
      latitude: 32.865747, 
      wind_direction: 135, 
      swell_direction: 293, 
      surf_height_min: 3.0, 
      surf_height_max: 8.0,
      tide: 'low'
    }

    s = Spot.create(spot_attributes)
    expect(s.errors[:longitude]).to_not be_empty

  end



end