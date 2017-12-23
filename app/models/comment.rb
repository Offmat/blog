class Comment < ApplicationRecord
  belongs_to :article
  validates :commenter, presence: true, email: { message: nil }
  validates :body, presence: true, length: { in: 6..500 }
end
