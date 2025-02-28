class ChangePostsToPlanets < ActiveRecord::Migration[7.0]
  def change
    rename_table :posts, :planets
  end
end
