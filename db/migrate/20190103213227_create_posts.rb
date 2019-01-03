class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :author
      t.text :comment
      t.string :avatar
      t.string :date
      t.integer :likes

      t.timestamps
    end
  end
end
