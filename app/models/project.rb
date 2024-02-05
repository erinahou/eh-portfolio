class Project < ApplicationRecord
  has_one_attached :photo

  validates :title, presence: true
  validates :summary, presence: true
  validates :description, presence: true
end
