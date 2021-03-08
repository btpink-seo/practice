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
class Memo < ApplicationRecord
  belongs_to :memoable, polymorphic: true
end
