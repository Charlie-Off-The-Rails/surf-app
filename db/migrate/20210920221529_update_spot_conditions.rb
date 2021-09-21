class UpdateSpotConditions < ActiveRecord::Migration[6.1]
  def change
    remove_column :spots, :swell_direction
    remove_column :spots, :wind_direction
    add_column :spots, :swell_direction, :string, array:true, default: []
    add_column :spots, :wind_direction, :string, array:true, default: []
  end
end
