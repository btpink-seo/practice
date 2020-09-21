class CtrlController < ApplicationController
  def upload_process
    file = params[:upfile]

    name = file.original_filename

    perms = %w[.jpg .jpeg .gif .png]

    if !perms.include?(File.extname(name).downcase)
      result = '업로드할 수 있는 파일은 사진뿐입니다.'
    elsif file.size > 1.megabyte
      result = '파일 사이즈는 1MB까지 입니다.'
    else
      File.open("public/docs/#{name}", 'wb') { |f| f.write(file.read) }
      result = "#{name}을 업로드했습니다."
    end

    render plain: result
  end

  def updb
    @author = Author.find(params[:id])
  end

  def updb_process
    @author = Author.find(params[:id])
    if @author.update(params.require(:author).permit(:data))
      render plain: '저장 성공'
    else
      render plain: @author.errors.full_messages[0]
    end
  end

  def res_render
    # action이라 적혀있지만 사실은 템플렛을 불러오는 것이다.
    # render action: :upload and return
    # render template: 'hello/index'
    # render 'hello/index'
    # render plain: '<div>오늘도 날씨가 좋구나</div>'
    # render html: '<div>오늘도 날씨가 좋구나</div>'.html_safe
    # render inline: "request info : #{request.headers}"
    # head :not_found
    # redirect_to 'http://www.naver.com'
    redirect_to books_path
  end

  def show_photo
    @author = Author.find(1)
    send_data @author.photo, type: @author.ctype, disposition: :inline
  end

  def get_xml
    @books = Book.all
    render json: @books
  end

  def cookie
    @email = cookies[:email]
  end

  def cookie_rec
    cookies[:email] = { value: params[:email], expires: 3.months.from_now, http_only: true }
    render plain: 'saved cookie'
  end
end