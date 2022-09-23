class MakeupSerializer < ActiveModel::Serializer
  attributes :id, :name, :product_type, :category, :brand, :currency, :price, :description, :image_link, :product_colors
end
