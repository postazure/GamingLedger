class MapsController < ApplicationController

  def create
    @map = Map.new(title: params[:title])
    @map.img_url = params[:file]
    @map.group_id = params[:group_id]
    @map.save!

    # puts "#"*70
    # puts params
    #
    # puts "#"*70
    # puts @map.img_url.url
    # puts @map.img_url.current_path
    # puts @map.img_url.identifier
    # puts "#"*70

    render json:{map:@map, map_url:@map.img_url.url}
  end

  def index
    @map = Map.where(group_id:params[:group_id])
    render json:@map
  end

end
