class Spot < ApplicationRecord
    has_many :collection_spots 
    has_many :collections, through: :collection_spots
end
