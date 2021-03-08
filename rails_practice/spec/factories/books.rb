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
FactoryBot.define do
  factory :book do
    isbn { "MyString" }
    title { "MyString" }
    price { 1 }
    publish { "MyString" }
    published { "2020-09-12" }
    dl { false }
  end
end
