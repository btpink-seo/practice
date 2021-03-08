# == Schema Information
#
# Table name: memos
#
#  id            :bigint           not null, primary key
#  body          :string
#  memoable_type :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  memoable_id   :bigint
#
# Indexes
#
#  index_memos_on_memoable_type_and_memoable_id  (memoable_type,memoable_id)
#
FactoryBot.define do
  factory :memo do
    memoable { nil }
    body { "MyString" }
  end
end
