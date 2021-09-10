class UpdateSurfHeightColumns < ActiveRecord::Migration[6.1]
  def change
    add_column :spots, :surf_height_max, :decimal
    rename_column :spots, :surf_height, :surf_height_min
  end
end
