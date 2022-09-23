# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_09_19_212441) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "makeups", force: :cascade do |t|
    t.string "name"
    t.string "product_type"
    t.string "category"
    t.string "brand"
    t.string "currency"
    t.string "price"
    t.string "description"
    t.string "image"
    t.string "product_colors"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "rating"
    t.string "description_title"
    t.string "description"
    t.string "state"
    t.bigint "user_id", null: false
    t.bigint "makeup_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["makeup_id"], name: "index_reviews_on_makeup_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "reviews", "makeups"
  add_foreign_key "reviews", "users"
end
