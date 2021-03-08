# == Schema Information
#
# Table name: books
#
#  id         :bigint           not null, primary key
#  dl         :boolean
#  isbn       :string
#  price      :integer
#  publish    :string
#  published  :date
#  title      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Book < ApplicationRecord
  has_many :authors_books
  has_many :reviews
  has_many :users, through: :reviews
  has_many :memos, as: :memoable
  has_and_belongs_to_many :authors

  # default_scope { order(updated_at: :desc) }
  scope :gihyo, -> { where(publish: '技術評論社') }
  scope :newer, -> { order(published: :desc) }
  scope :top10, -> { newer.limit(10) }
  scope :whats_new, -> (pub) { where(publish: pub).order(published: :desc).limit(5) }

  validates :isbn,
    presence: true,
    uniqueness: true,
    isbn: { allow_old: false }
    # length: { is: 17 },
    # format: { with: /\A[0-9]{3}-[0-9]{1}-[0-9]{3,5}-[0-9]{4}-[0-9X]{1}\z/ }
  validates :title,
    presence: true,
    length: { minimum: 1, maximum: 100 },
    uniqueness: { scope: :publish }
  validates :price,
    numericality: { only_integer: true, less_than: 10_000 }
  validates :publish,
    inclusion: { in: ['秀和システム', '翔泳社', '技術評論社', '日経BP社', 'ソシム'] }
end
