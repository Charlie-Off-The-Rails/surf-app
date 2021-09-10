
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
    user = current_user
    collection = user.collections.create(collection_params)
    if collection.valid?
    render json: collection
    else 
      render json: collection.errors.full_messages, status: 422
    end
  end
  def update
    collection = Collection.find(params[:id])
    updated_collection = collection.update(collection_params)
    if collection.valid?
      render json: collection
    else
      render json: collection.errors.full_messages, status: 422
    end
  end
  def destroy 
    collection = Collection.find(params[:id])
    collection.destroy
  end
  private 
  def collection_params
    params.require(:collection).permit(:name, :description, :priority)
  end
end
