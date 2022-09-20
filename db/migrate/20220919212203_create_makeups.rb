class CreateMakeups < ActiveRecord::Migration[6.1]
  def change
    create_table :makeups do |t|
      t.string :product_type
      t.string :category
      t.string :brand
      t.string :price_sign
      t.integer :price
      t.string :description
      t.string :image
      t.string :product_colors

      t.timestamps
    end
  end
end
