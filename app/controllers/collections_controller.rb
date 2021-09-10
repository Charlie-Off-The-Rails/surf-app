
class CollectionsController < ApplicationController
  before_action :authenticate_user!
  def index 
    collections = current_user.collections
    render json: collections
  end
  def show 
    collection = Collection.find(params[:id])
    render json: collection
  end
  def create
    collection = Collection.create(collection_params)
    render json: collection
  end
  private 
  def collection_params
    params.require(:collection).permit(:name, :description, :priority)
  end
end
