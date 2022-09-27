class MakeupSerializer < ActiveModel::Serializer
  attributes :id, :name,
  :price,
  :currency,
  :api_featured_image, 
  :description, 
  :category, 
  :product_type, 
  :brand

  has_many :reviews
  has_many :users


end
