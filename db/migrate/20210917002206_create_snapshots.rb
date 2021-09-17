class CreateSnapshots < ActiveRecord::Migration[6.1]
  def change
    create_table :snapshots do |t|
      t.integer :spot_id
      t.integer :wind_direction
      t.integer :swell_direction
      t.decimal :surf_height
      t.string :tide
      t.timestamps
    end
  end
end
