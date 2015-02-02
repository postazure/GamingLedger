class CreateMaps < ActiveRecord::Migration
  def change
    create_table :maps do |t|
      t.string :title
      t.integer :user_id
      t.string :img_url
      t.integer :group_id

      t.timestamps
    end
  end
end
