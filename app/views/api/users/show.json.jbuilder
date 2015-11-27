json.extract! current_user, :fname, :lname, :age, :gender, :email
json.image_url asset_path(user.profile.url)
