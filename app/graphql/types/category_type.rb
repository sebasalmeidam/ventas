module Types
  class CategoryType < Types::BaseObject
    description "Descripción de Categoría"
    field :id, String, null: false
    field :nombre, String, null: false
    field :descripcion, String, null: false
    field :products, [Types::ProductType], null: true
  end
end
