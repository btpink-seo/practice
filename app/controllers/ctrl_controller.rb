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
end