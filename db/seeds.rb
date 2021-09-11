# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create(
    { 
        user_name: 'Test Surfer', 
        email: 'testsurfer@gmail.com', 
        password: '123456', 
        password_confirmation: '123456'
    })


collection_1 = Collection.create(
    { 
        name:'Saturday', 
        description: 'My favorite spots for Saturday', 
        priority: 5 ,
        # added user_id attribute
        user_id: user.id
    })

collection_2 = Collection.create(
    {
        name:'Summer Breaks', 
        description: 'My favorite spots for the Summer', 
        priority: 2 ,
        # added user_id attribute
        user_id: user.id
    })

# looking into a math formulat to figure out azimuth range ex: 350 to 10 (ex: NW to NE)

spot_attributes = [ 
        { 
            name: 'Scripps', 
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
        },
        { 
            name: 'Pacific Beach', 
            description: 'Surf spot for PB', 
            easy_parking: true, 
            bottom: 'sand', 
            latitude: 32.79817, 
            longitude: -117.259056, 
            wind_direction: 67, 
            swell_direction: 270, 
            surf_height_min: 2.0, 
            surf_height_max: 6.0,
            tide: 'low'
        },
        { 
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
        },
        { 
            name: 'Coronado Beach', 
            description: 'Surf spot for Coronado Beach', 
            easy_parking: true, 
            bottom: 'sand', 
            latitude: 32.683467, 
            longitude: -117.186886, 
            wind_direction: 35, 
            swell_direction: 200, 
            surf_height_min: 3.0, 
            surf_height_max: 6.0,
            tide: 'med'
        },
        { 
            name: 'Las Gaviotas', 
            description: 'Surf spot for Las Gaviotas', 
            easy_parking: true, 
            bottom: 'rock', 
            latitude: 32.251866, 
            longitude: -116.960324, 
            wind_direction: 90, 
            swell_direction: 230, 
            surf_height_min: 3.0,
            surf_height_max: 6.0, 
            tide: 'med'
        },
        { 
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
        },

    ]

spot_attributes.each do |value|
    Spot.create value
    puts "creating #{value}"
end


collection_spot_1 = CollectionSpot.create( { collection_id: 1, spot_id: 1} )



#  if we want a fresh database
#   $ rails db:reset 
#  command above is the same as running:
#   $ rails db:drop
#   $ rails db:create
#   $ rails db:migrate
#   $ rails db:seed
  
