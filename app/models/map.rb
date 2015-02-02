class Map < ActiveRecord::Base
  has_many :markers
  belongs_to :group
end
