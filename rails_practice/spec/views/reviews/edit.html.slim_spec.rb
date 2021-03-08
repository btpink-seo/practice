require 'rails_helper'

RSpec.describe "reviews/edit", type: :view do
  before(:each) do
    @review = assign(:review, Review.create!(
      book: nil,
      user: nil,
      status: 1,
      body: "MyText"
    ))
  end

  it "renders the edit review form" do
    render

    assert_select "form[action=?][method=?]", review_path(@review), "post" do

      assert_select "input[name=?]", "review[book_id]"

      assert_select "input[name=?]", "review[user_id]"

      assert_select "input[name=?]", "review[status]"

      assert_select "textarea[name=?]", "review[body]"
    end
  end
end
