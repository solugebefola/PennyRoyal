json.total_count @total_count
json.per_number @per
json.page_number @page
json.transactions do
  json.array! @transactions,
  :tags,
  :id,
  :account_id,
  :category_id,
  :amount,
  :description,
  :notes,
  :date
end
