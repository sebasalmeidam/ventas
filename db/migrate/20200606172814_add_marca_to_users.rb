class AddMarcaToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :marca, :string
  end
end
