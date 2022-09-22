class Review < ApplicationRecord
  belongs_to :user
  belongs_to :makeup

  validates :rating, :description_title, :description, :state, presence: true


end
