class IsbnValidator < ActiveModel::EachValidator
  def validate_each(record, attribute, value)
    if options[:allow_old]
      pattern = '\A([0-9]{3}-)?[0-9]{1}-[0-9]{3,5}-[0-9]{4}-[0-9X]{1}\z'
    else
      pattern = '\A[0-9]{3}-[0-9]{1}-[0-9]{3,5}-[0-9]{4}-[0-9X]{1}\z'
    end
    record.errors.add(attribute, '는 올바른 형식이 아닙니다.') unless value =~ /#{pattern}/
  end
end
