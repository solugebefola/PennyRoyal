class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def log_in(user)
    session[:session_token] = user.reset_token!
    current_user = user
  end

  def sign_in
  end

  def sign_out
    @current_user.session_token = User.generate_token
    session[:session_token] = nil
  end
end
