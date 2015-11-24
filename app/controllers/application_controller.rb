class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :require_logged_in, except: [:new, :create]
  before_action :default_headers
  helper_method :log_in, :logged_in?, :current_user


  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def log_in(user)
    session[:session_token] = user.reset_token!
    current_user = user
    puts "CURRENT USER #{current_user.email}"
  end

  def logged_in?
    !!current_user
  end

  def log_out
    @current_user.session_token = User.generate_token
    session[:session_token] = nil
  end

  private
    def require_logged_in
      puts "logged in? #{logged_in?}"
      redirect_to "/session/new" unless logged_in?
    end

    def default_headers
      headers['X-Frame-Options'] = 'Allow-from http://www.hover.com'
    end
end
