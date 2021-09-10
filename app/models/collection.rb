class Collection < ApplicationRecord
    belongs_to :user
    has_many :collection_spots
    has_many :spots, through: :collection_spots
    validates :name,:description, presence: true
end


#  Syntax reference from https://guides.rubyonrails.org/association_basics.html#the-has-many-through-association

# class Physician < ApplicationRecord
#     has_many :appointments
#     has_many :patients, through: :appointments
#   end
  
#   class Appointment < ApplicationRecord
#     belongs_to :physician
#     belongs_to :patient
#   end
  
#   class Patient < ApplicationRecord
#     has_many :appointments
#     has_many :physicians, through: :appointments
#   end
  