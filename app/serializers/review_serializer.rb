class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :description, :username, :location
  has_one :user
  # has_one :makeup
end
