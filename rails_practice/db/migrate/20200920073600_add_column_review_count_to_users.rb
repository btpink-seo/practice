class AddColumnReviewCountToUsers < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :reviews_count, :integer, default: 0
  end
end
