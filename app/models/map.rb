class Map < ActiveRecord::Base
  has_many :markers
  belongs_to :group
  mount_uploader :img_url, MapUploader
end
