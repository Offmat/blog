RSpec.describe Article do
  subject { Article.new(text: "I need this", title: "main title") }
  it { is_expected.to validate_presence_of(:title) }
  it { is_expected.to validate_length_of(:title).is_at_least(2) }
  it { is_expected.to validate_uniqueness_of(:title) }
end
