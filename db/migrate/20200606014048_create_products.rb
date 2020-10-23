class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.references :category, foreign_key: true
      t.string :codigo
      t.string :nombre
      t.string :descripcion
      t.float :precio

      t.timestamps
    end
  end
end
