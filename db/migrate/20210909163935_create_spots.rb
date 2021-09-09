class CreateSpots < ActiveRecord::Migration[6.1]
  def change
    create_table :spots do |t|
      t.string :name
      t.text :description
      t.boolean :easy_parking
      t.string :bottom
      t.decimal :latitude
      t.decimal :longitude
      t.string :wind_direction
      t.string :swell_direction
      t.decimal :surf_height
      t.string :tide

      t.timestamps
    end
  end
end
