class GroupsController < ApplicationController
  def index

    @groups = current_user.groups
    render json:@groups
  end

  def create
    @group = Group.new(group_params)
    @group.owner_id = current_user.id
    @group.users.push(current_user)

    members = []
    if params[:members]
      params[:members].each do |email|
        members.push(User.where(email:email))
      end
    end

    if @group.save
      members.each do |user|
        @group.users.push(user)
      end
      render json:@group
    else
      render json:@group.errors
    end
  end

  def update
    @group = Group.find(params[:id])
    if @group.update(group_params)
      render json:@group
    end
  end

  def show
    @group = Group.find(params[:id])
    @members = @group.users
    render json:[@group, @members]
  end

  private
  def group_params
    params.require(:group).permit(
      :name,
      :description,
    )
  end
end
