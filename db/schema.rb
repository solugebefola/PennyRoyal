# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151211190141) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "account_bases", force: :cascade do |t|
    t.integer  "institution_id", null: false
    t.string   "name",           null: false
    t.string   "account_type",   null: false
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "account_bases", ["institution_id"], name: "index_account_bases_on_institution_id", using: :btree

  create_table "accounts", force: :cascade do |t|
    t.string   "name",                                   null: false
    t.integer  "user_id",                                null: false
    t.integer  "institution_id",                         null: false
    t.string   "username",                               null: false
    t.string   "user_password",                          null: false
    t.decimal  "balance",        precision: 8, scale: 2, null: false
    t.string   "account_type",                           null: false
    t.datetime "created_at",                             null: false
    t.datetime "updated_at",                             null: false
  end

  add_index "accounts", ["account_type"], name: "index_accounts_on_account_type", using: :btree
  add_index "accounts", ["institution_id"], name: "index_accounts_on_institution_id", using: :btree
  add_index "accounts", ["name"], name: "index_accounts_on_name", using: :btree
  add_index "accounts", ["user_id"], name: "index_accounts_on_user_id", using: :btree

  create_table "budgets", force: :cascade do |t|
    t.string   "name",                                 null: false
    t.integer  "category_id",                          null: false
    t.decimal  "limit",       precision: 10, scale: 2
    t.decimal  "balance",     precision: 10, scale: 2
    t.datetime "created_at",                           null: false
    t.datetime "updated_at",                           null: false
  end

  add_index "budgets", ["category_id"], name: "index_budgets_on_category_id", using: :btree
  add_index "budgets", ["name"], name: "index_budgets_on_name", using: :btree

  create_table "categories", force: :cascade do |t|
    t.string   "name",        null: false
    t.integer  "category_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "categories", ["category_id"], name: "index_categories_on_category_id", using: :btree
  add_index "categories", ["name"], name: "index_categories_on_name", using: :btree

  create_table "institutions", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "url",        null: false
    t.string   "logo_url"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "institutions", ["name"], name: "index_institutions_on_name", unique: true, using: :btree

  create_table "pg_search_documents", force: :cascade do |t|
    t.text     "content"
    t.integer  "searchable_id"
    t.string   "searchable_type"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "pg_search_documents", ["searchable_type", "searchable_id"], name: "index_pg_search_documents_on_searchable_type_and_searchable_id", using: :btree

  create_table "taglinks", force: :cascade do |t|
    t.integer  "transaction_id"
    t.integer  "tag_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "taglinks", ["tag_id"], name: "index_taglinks_on_tag_id", using: :btree
  add_index "taglinks", ["transaction_id"], name: "index_taglinks_on_transaction_id", using: :btree

  create_table "tags", force: :cascade do |t|
    t.string   "name",       null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "tags", ["user_id"], name: "index_tags_on_user_id", using: :btree

  create_table "transaction_updates", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "transactions", force: :cascade do |t|
    t.integer  "account_id",                           null: false
    t.integer  "category_id",                          null: false
    t.decimal  "amount",      precision: 10, scale: 2, null: false
    t.string   "description",                          null: false
    t.text     "notes"
    t.datetime "created_at",                           null: false
    t.datetime "updated_at",                           null: false
    t.datetime "date"
  end

  add_index "transactions", ["account_id"], name: "index_transactions_on_account_id", using: :btree
  add_index "transactions", ["amount"], name: "index_transactions_on_amount", using: :btree
  add_index "transactions", ["category_id"], name: "index_transactions_on_category_id", using: :btree
  add_index "transactions", ["date"], name: "index_transactions_on_date", using: :btree
  add_index "transactions", ["description"], name: "index_transactions_on_description", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",                null: false
    t.string   "password_digest",      null: false
    t.string   "session_token",        null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "fname"
    t.string   "lname"
    t.string   "gender"
    t.integer  "age"
    t.string   "profile_file_name"
    t.string   "profile_content_type"
    t.integer  "profile_file_size"
    t.datetime "profile_updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["password_digest"], name: "index_users_on_password_digest", unique: true, using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree

end
