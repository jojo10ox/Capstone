class MakeupSerializer < ActiveModel::Serializer
  attributes :id, :name,
  :price,
  :currency,
  :image_link, 
  :description, 
  :category, 
  :product_type, 
  :brand

  has_many :reviews
  has_many :users


end
