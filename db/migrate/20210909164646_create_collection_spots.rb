class CreateCollectionSpots < ActiveRecord::Migration[6.1]
  def change
    create_table :collection_spots do |t|
      t.integer :collection_id
      t.integer :spot_id

      t.timestamps
    end
  end
end
