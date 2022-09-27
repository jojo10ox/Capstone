class Review < ApplicationRecord
  belongs_to :user
  belongs_to :makeup

  #validates :rating, :description_title, :review_description, :state, presence: true


end
