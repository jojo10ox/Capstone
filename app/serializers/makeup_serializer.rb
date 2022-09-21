class MakeupSerializer < ActiveModel::Serializer
  attributes :id, :name, :product_type, :category, :brand, :currency, :price, :description, :image, :product_colors
end
