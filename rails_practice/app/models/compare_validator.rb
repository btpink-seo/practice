class CompareValidator < ActiveModel::EachValidator
  def validate_each(record, attribute, value)
    cmp = record.attributes[options[:compare_to]].to_i
    case options[:type]
    when :greater_then
      record.errors.add(attribute, '는 지정항목 보다 커야만 합니다.') unless value > cmp
    when :less_than
      record.errors.add(attribute, '는 지정항목 보다 작아야만 합니다.') unless value < cmp
    when :equal
      record.errors.add(attribute, '는 지정항목 보다 같아야만 합니다.') unless value == cmp
    else
      raise 'unknown type'
    end
  end
end