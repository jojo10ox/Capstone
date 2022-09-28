class Review < ApplicationRecord
  belongs_to :user
  belongs_to :makeup

  validates :description_title,  presence: true


end
