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
FactoryBot.define do
  factory :user do
    username { "MyString" }
    password_digest { "MyString" }
    email { "MyString" }
    dm { false }
    roles { "MyString" }
    reviews_count { 1 }
  end
end
