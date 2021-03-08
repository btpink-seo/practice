# == Schema Information
#
# Table name: members
#
#  id           :bigint           not null, primary key
#  email        :string
#  lock_version :integer          default(0)
#  name         :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
FactoryBot.define do
  factory :member do
    name { "MyString" }
    email { "MyString" }
    lock_version { 1 }
  end
end
