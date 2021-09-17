class SpotsController < ApplicationController

    def index
        spots = Spot.includes(:snapshots).where("snapshots.created_at = ?", Date.today)
        puts "!!!!!!!!!!!!!!!!!!!!!!!!!!!"
        puts spots
        render json: spots
    end

    # @shops = Shop.includes(:items).where("items.itemp_type = ?", 'accesories')
    # format.json { render json: { :shop => @shops.as_json(:include => :items) } }


end
