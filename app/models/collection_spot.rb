class CollectionSpot < ApplicationRecord
    belongs_to :spot
    belongs_to :collection
    validates :collection, uniqueness: { scope: :spot, message: "each collection_spot pair should be unique." }
end
