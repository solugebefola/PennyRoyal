json.total_count @total_count
json.per @per
json.page @page
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
