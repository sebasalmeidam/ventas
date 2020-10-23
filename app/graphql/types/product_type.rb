module Types
  class ProductType < Types::BaseObject
    description 'Descripción de producto'
    field :id, String, null: true
    field :codigo, String, null: true
    field :nombre, String, null: true
    field :descripcion, String, null: true
    field :precio, Float, null: true
    field :imagenes_url, [String], null: true
  
    def imagenes_url
      img = []
      AttachmentLoader.for(object.class, :imagenes).load(object.id).then do |imagen|
        img << Rails.application.routes.url_helpers.rails_blob_url(imagen, only_path: true) if imagen
      end
    end
  
  end  
end
