class Like < ApplicationRecord
  belongs_to :user
  belongs_to :likeable, polymorphic: true
  # krzyczał o fkey dla modułu Likeable a jak przeniosłem validates na koniec klasy
  # i zamieniłem miejscami usera i likeable w validates to ruszył - czary!
  validates :user, uniqueness: { scope: :likeable }
end
