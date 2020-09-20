# == Schema Information
#
# Table name: authors
#
#  id         :bigint           not null, primary key
#  address    :text
#  birth      :date
#  ctype      :string
#  name       :string
#  photo      :binary
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint
#
# Indexes
#
#  index_authors_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
class Author < ApplicationRecord
  belongs_to :user
  # has_many :authors_books
  # has_many :books, through: :authors_books
  has_and_belongs_to_many :books
  has_many :comments, -> { where(deleted: false) }, class_name: 'FanComment', foreign_key: 'author_no'
  has_many :memos, as: :memoable

  validate :file_invalid?

  def data=(data)
    self.ctype = data.content_type
    self.photo = data.read
  end

  private

  def file_invalid?
    ps = %w[image/jpeg image/gif image/png]
    errors.add(:photo, '는 사진파일이 아닙니다.') unless ps.include?(self.ctype)
    errors.add(:photo, '는 1MB를 초과합니다.') if self.photo.length > 1.megabyte
  end
end
