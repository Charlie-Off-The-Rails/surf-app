import React, { Component } from "react";
import StyledPageTitle from "../components/StyledPageTitle";
import CardFormat from "../components/CardFormat";
import SpotCard from "../components/SpotCard";


class SurfSpotIndex extends Component {
  render() {
    const { surfSpots, collections, createCollectionSpot, super_secret_api_key, weatherSurfData } = this.props;
    return (
      <>
        <StyledPageTitle>Surf Spots</StyledPageTitle>
        <br />
        <CardFormat>
          {surfSpots &&
            surfSpots.map((surfSpot) => {
              return (
                <SpotCard 
                  spotData={weatherSurfData[surfSpot.id]}
                  surfSpot={surfSpot} 
                  collections={collections}
                  createCollectionSpot={createCollectionSpot}
                  key={surfSpot.id}
                  super_secret_api_key={super_secret_api_key}
                />
              );
            })}
        </CardFormat>
        
      </>
    );
  }
}

export default SurfSpotIndex;
