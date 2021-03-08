class RecordController < ApplicationController
  def find_by2
    @book = Book.find_by(publish: '技術評論社', price: 2980)
    render 'books/show'
  end

  def ph1
    aaa = ['publish = ? OR price >= ?', params[:publish], params[:price]]
    @books = Book.where(aaa)
    render 'books/index'
  end
end
