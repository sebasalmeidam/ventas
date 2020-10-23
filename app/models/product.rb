class Product < ApplicationRecord
  belongs_to :category
  
  has_many_attached  :imagenes

  validates :imagenes, content_type: {in: ["image/png", "image/jpg", "image/jpeg"], message: 'No es formato válido'}
end
