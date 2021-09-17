import React, { Component } from "react";
import StyledPageTitle from "../components/StyledPageTitle";
import CardFormat from "../components/CardFormat";
import SpotCard from "../components/SpotCard";


class SurfSpotIndex extends Component {
  render() {
    const { surfSpots, collections, createCollectionSpot } = this.props;
    return (
      <>
        <StyledPageTitle>Surf Spots</StyledPageTitle>
        <br />
        <CardFormat>
          {surfSpots &&
            surfSpots.map((surfSpot) => {
              return (
                <SpotCard 
                  surfSpot={surfSpot} 
                  collections={collections}
                  createCollectionSpot={createCollectionSpot}
                  key={surfSpot.id}
                />
              );
            })}
        </CardFormat>
        
      </>
    );
  }
}

export default SurfSpotIndex;
