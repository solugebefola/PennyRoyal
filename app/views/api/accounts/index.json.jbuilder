json.array! @accounts do |comment|
  json.(comment, :id, :name, :user_id, :institution_id, :username, :balance, :account_type)
  json.institution(@institutions.detect { |inst| inst.id == comment.institution_id }, :name)
end
