class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating,:description_title, :description, :state
  has_one :user
  # has_one :makeup
end
