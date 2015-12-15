json.array! @categories.each do |category|
  monthly_transactions = category.transactions.where(date: (1.month.ago..Time.now))
  json.name category.name
  json.id category.id
  json.num_transactions monthly_transactions.count
  positive = 0
  negative = 0
  monthly_transactions.each do |t|
    if t.amount > 0
      positive += t.amount
    else
      negative += t.amount
    end
  end
  json.positive positive
  json.negative negative
end
