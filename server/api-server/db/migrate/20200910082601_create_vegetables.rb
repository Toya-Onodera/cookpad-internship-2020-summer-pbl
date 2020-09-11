class CreateVegetables < ActiveRecord::Migration[6.0]
  def change
    create_table :vegetables do |t|
    t.string :j_name
    t.string :e_name
    t.binary :image
      t.timestamps
    end
  end
end
