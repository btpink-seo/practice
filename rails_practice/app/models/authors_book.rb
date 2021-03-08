# == Schema Information
#
# Table name: authors_books
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  author_id  :bigint
#  book_id    :bigint
#
# Indexes
#
#  index_authors_books_on_author_id  (author_id)
#  index_authors_books_on_book_id    (book_id)
#
# Foreign Keys
#
#  fk_rails_...  (author_id => authors.id)
#  fk_rails_...  (book_id => books.id)
#
class AuthorsBook < ApplicationRecord
  belongs_to :book
  belongs_to :author
end
