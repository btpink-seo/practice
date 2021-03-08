# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  dm              :boolean
#  email           :string
#  password_digest :string
#  reviews_count   :integer          default(0)
#  roles           :string
#  username        :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  has_one :author
  has_many :reviews, counter_cache: true
  has_many :book, through: :reviews

  validates :agreement, acceptance: { on: :create }
  validates :email, confirmation: { message: '%{value}필수입니다.' }

  # valid?(:hoge)
  # save(context: :hoge)
  with_options on: :hoge do
    validates :email, presence: :true
  end

  has_secure_password
end
