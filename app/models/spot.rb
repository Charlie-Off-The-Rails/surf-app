class Spot < ApplicationRecord
    has_many :collection_spots 
    has_many :collections, through: :collection_spots
    validates :name,:description,:latitude,:longitude, presence: true
    validates :easy_parking, inclusion: {in: [ true, false ]}
    validates :bottom, inclusion: {in: ["sand","rock"]}
end


# should a Spot belongs_to to collection, through: spot_collections?
