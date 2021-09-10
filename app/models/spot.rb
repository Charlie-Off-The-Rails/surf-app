class Spot < ApplicationRecord
    has_many :collection_spots 
    has_many :collections, through: :collection_spots
    validates :name,:description,:easy_parking,:latitude,:longitude, presence: true
    validates :bottom, inclusion: {in: ["sand","rock"]}
end
