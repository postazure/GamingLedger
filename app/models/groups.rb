class Groups < ActiveRecord::Base
  has_many :group_members
  has_many :users, through: :group_members
end
