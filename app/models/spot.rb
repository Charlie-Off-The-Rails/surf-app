class Spot < ApplicationRecord
    has_many :collection_spots 
    belongs_to :collections through :collection_spots
end
