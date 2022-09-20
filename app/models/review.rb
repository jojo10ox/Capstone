class Review < ApplicationRecord
  belongs_to :user
  belongs_to :makeup

  validates :rating, :description, :username, :location, presence: true


end
