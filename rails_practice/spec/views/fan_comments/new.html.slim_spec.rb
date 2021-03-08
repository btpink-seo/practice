require 'rails_helper'

RSpec.describe "fan_comments/new", type: :view do
  before(:each) do
    assign(:fan_comment, FanComment.new(
      author_no: 1,
      name: "MyString",
      body: "MyText",
      deleted: false
    ))
  end

  it "renders new fan_comment form" do
    render

    assert_select "form[action=?][method=?]", fan_comments_path, "post" do

      assert_select "input[name=?]", "fan_comment[author_no]"

      assert_select "input[name=?]", "fan_comment[name]"

      assert_select "textarea[name=?]", "fan_comment[body]"

      assert_select "input[name=?]", "fan_comment[deleted]"
    end
  end
end
