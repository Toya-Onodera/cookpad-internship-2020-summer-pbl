class CreateRecipeInformations < ActiveRecord::Migration[6.0]
  def change
    create_table :recipe_informations do |t|
    t.integer :recipe_id
    t.integer :vegetable_id
    t.boolean :is_open
      t.timestamps
    end
  end
end
