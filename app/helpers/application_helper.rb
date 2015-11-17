module ApplicationHelper

  def auth_token
    <<-HTML.html_safe
    <input
      type="hidden"
      name="authenticity_token"
      value="#{form_aturhenticity_token}">
    HTML
  end
end
