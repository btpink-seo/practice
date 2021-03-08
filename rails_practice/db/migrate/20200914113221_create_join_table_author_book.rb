class CreateJoinTableAuthorBook < ActiveRecord::Migration[5.2]
  def change
    create_table :authors_books do |t|
      # t.index [:author_id, :book_id]
      # t.index [:book_id, :author_id]
      t.references :author, foreign_key: true
      t.references :book, foreign_key: true

      t.timestamps
    end
  end
end
