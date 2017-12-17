class Like < ApplicationRecord
  validates :article, uniqueness: { scope: :user }
  belongs_to :user
  belongs_to :article
end
