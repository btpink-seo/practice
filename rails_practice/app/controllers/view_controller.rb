class ViewController < ApplicationController


  def form_tag
    @book = Book.new
    render layout: 'only_view'
  end

  def form_for
    @book = Book.new
  end

  def create
    redirect_to view_keyword_path
  end

  def select
    @book = Book.new(publish: '技術評論社')
  end

  def col_select
    # 폼의 근본이 되는 모델을 준비
    @book = Book.new(publish: 'seo6')
    # distinct 중복제거
    @books = Book.select(:publish).distinct.order(:publish)
  end

  def group_select
    @review = Review.new
    @authors = Author.all.preload(:books)
  end

  def dat_select
    @book = Book.find(1)
  end

  def col_radio
    @book = Book.new(publish: '技術評論社')
    @books =  Book.select(:publish).distinct
  end

  def fields
    @user = User.find(1)
  end

  def nest
    @msg = 'gggggggggggggggggggggg'
    @book = Book.find 1
    @books = Book.all
    render layout: 'child'
  end
end
