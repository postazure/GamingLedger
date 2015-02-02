class User < ActiveRecord::Base
  has_many :group_members
  has_many :groups, through: :group_members

  validates :email, presence: true, uniqueness: true
  has_secure_password
end
