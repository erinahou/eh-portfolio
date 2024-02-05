class Project < ApplicationRecord
  validates :title, presence: true
  validates :summary, presence: true
  validates :description, presence: true
end
