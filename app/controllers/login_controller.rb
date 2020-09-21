class LoginController < ApplicationController
  skip_before_action :check_logined

  def index
  end

  def auth
    usr = User.find_by(username: params[:username])
    if usr && usr.authenticate(params[:password])
      reset_session
      session[:usr] = usr.id
      redirect_to params[:referer]
    else
      flash.now[:referer] = params[:referer]
      @error = '유저명이나 비밀번호가 틀렸습니다.'
      render 'index'
    end
  end

  def logout
    reset_session
    redirect_to login_path
  end
end