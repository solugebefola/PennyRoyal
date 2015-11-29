json.total_count @total_count
json.per_number @per_number
json.page_number @page_number
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
