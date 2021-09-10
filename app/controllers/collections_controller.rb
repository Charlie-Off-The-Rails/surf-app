
class CollectionsController < ApplicationController
  before_action :authenticate_user!
  def index 
    collections = current_user.collections
    render json: collections
  end
end
