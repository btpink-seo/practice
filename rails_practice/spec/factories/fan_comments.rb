# == Schema Information
#
# Table name: fan_comments
#
#  id         :bigint           not null, primary key
#  author_no  :integer
#  body       :text
#  deleted    :boolean
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
FactoryBot.define do
  factory :fan_comment do
    author_no { 1 }
    name { "MyString" }
    body { "MyText" }
    deleted { false }
  end
end
