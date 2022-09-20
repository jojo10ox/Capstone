class MakeupSerializer < ActiveModel::Serializer
  attributes :id, :product_type, :category, :brand, :price_sign, :price, :description, :image, :product_colors
end
