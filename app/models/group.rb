class Group < ActiveRecord::Base
  has_many :group_members
  has_many :stories
  has_many :maps
  has_many :users, through: :group_members
end
