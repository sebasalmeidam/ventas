class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable, :registerable,
  devise :database_authenticatable,
         :recoverable, :rememberable, :validatable

  has_one_attached  :logo
  has_one_attached  :foto_perfil
  validates :logo, content_type: {in: ["image/png", "image/jpg", "image/jpeg"], message: 'No es formato válido'}
  
  has_many :categories
  has_many :products, through: :categories

  extend FriendlyId
  friendly_id :marca, use: :slugged
end
