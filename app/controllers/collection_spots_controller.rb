class CollectionSpotsController < ApplicationController
  before_action :authenticate_user!
  
  def create
    collection_spot = CollectionSpot.create(collection_spot_params)
    if collection_spot.valid? 
      render json: collection_spot
    else
      render json: collection_spot.errors.full_messages, status:422
    end

  end



  private 
  def collection_spot_params 
    params.require(:collection_spot).permit(:spot_id,:collection_id)
  end
end
