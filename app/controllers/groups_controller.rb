class GroupsController < ApplicationController
  def index
    @groups = Group.where(owner_id: current_user.id)
    render json:@groups

    @group = Group.new
  end

  def create
    @group = Group.new(group_params)
    @group.owner_id = current_user.id

    if @group.save
      render json:@group
    else
      render json:@group.errors
    end
  end

  private
  def group_params
    params.require(:group).permit(
      :name,
      :describe,
    )
  end
end
