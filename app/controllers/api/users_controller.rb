class Api::UsersController < ApplicationController
  
  def index
    render json: User.all.where.not(id: current_user.id)
  end

  def my_friends
    render json: User.add(current_user.add_friend)
  end

  def update
    current_user.add_friend << User.find(params[:id]).name
    current_user.save
  end

  
end
