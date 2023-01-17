class AddCatNameToPosts < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :cat_name, :string
  end
end
