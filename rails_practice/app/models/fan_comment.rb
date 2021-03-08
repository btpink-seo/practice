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
class FanComment < ApplicationRecord
end
