require 'rails_helper'

RSpec.describe "Hellos", type: :request do

  describe "GET /show" do
    it "returns http success" do
      get "/hello/show"
      expect(response).to have_http_status(:success)
    end
  end

end
