class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email

  has_many :reviews
  #:password_digest
end
