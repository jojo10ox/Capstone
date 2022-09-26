class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :rating
      t.string :description_title
      t.string :review_description
      t.string :state
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :makeup, null: false, foreign_key: true

      t.timestamps
    end
  end
end
