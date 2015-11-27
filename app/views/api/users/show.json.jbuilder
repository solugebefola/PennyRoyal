json.extract! current_user, :fname, :lname, :age, :gender, :email, :id
json.image_url asset_path(user.profile.url)
