RSpec.describe "Articles" do
  before { visit "/articles/new" }

  scenario "creating Article" do
    fill_in "Email", with: "lesniak.mat@gmail.com"
    fill_in "Password", with: "Fiat126p"
    click_on "Log in"

  end
end
