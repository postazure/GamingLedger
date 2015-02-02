class CreateStories < ActiveRecord::Migration
  def change
    create_table :stories do |t|
      t.string :title
      t.integer :user_id
      t.integer :group_id
      t.text :content

      t.timestamps
    end
  end
end
