class CreateMarkers < ActiveRecord::Migration
  def change
    create_table :markers do |t|
      t.integer :map_id
      t.string :title
      t.integer :user_id
      t.text :description
      t.integer :info_sheet_id

      t.timestamps
    end
  end
end
