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
FactoryBot.define do
  factory :author do
    user { nil }
    name { "MyString" }
    birth { "2020-09-13" }
    address { "MyText" }
    ctype { "MyString" }
    photo { "" }
  end
end
