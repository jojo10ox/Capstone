class CreateMakeups < ActiveRecord::Migration[6.1]
  def change
    create_table :makeups do |t|
      t.string :name
      t.string :product_type
      t.string :category
      t.string :brand
      t.string :currency
      t.integer :price
      t.string :description
      t.string :image_link



      t.timestamps
    end
  end
end
