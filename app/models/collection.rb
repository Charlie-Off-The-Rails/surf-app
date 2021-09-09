class Collection < ApplicationRecord
    belongs_to :user
    has_many :collection_spots
    has_many :spots through :collection_spots
end
