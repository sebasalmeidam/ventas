module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    #categories
    field :categories, [Types::CategoryType], null: true do
      description "Listado de categorías"
      argument :user, String, required: false, default_value: ""
    end
    
    def categories(user:)
      usuario = User.friendly.find(user)
      if usuario
        usuario.categories
      end
      rescue ActiveRecord::RecordNotFound => e
        return []
    end

    #products
    field :products, [Types::ProductType], null: true do
      description 'Todos los productos'
      argument :user, String, required: false, default_value: ""      
    end

    def products(user:)
      usuario = User.friendly.find(user)
      if usuario
        usuario.products
      end
      rescue ActiveRecord::RecordNotFound => e
        return []
    end
    
  end
end
