module ViewHelper
  # collection : 리스트의 근본이 되는 오브젝트 배열
  # prop : 일람하는 프로파티 명
  def list_tag(collection, prop)
    content_tag(:ul) do
      collection.each do |element|
        concat content_tag(:li, element.attributes[prop])
      end
    end
  end

  def list_tag2(collection, prop)
    list = '<ul>'
    collectioin.each do |element|
      list.concat('<li>')
      list.concat(h element.attributes[prop])
      list.concat('</li>')
    end
    raw list.concat('</ul>')
  end

  def blockquote_tag(cite, citetext, options = {}, &block)
    options.merge! cite: cite
    quote_tag = content_tag(:blockquote, capture(&block), options)
    p_tag = content_tag(:p) do
      concat '출처 : '
      concat content_tag(:cite, citetext)
    end
    quote_tag.concat(p_tag)
  end
end
