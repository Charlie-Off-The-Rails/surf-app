import React, { Component } from "react";
import { Link } from "react-router-dom";
import StyledPageTitle from "../components/StyledPageTitle";
import CardFormat from "../components/CardFormat";
import CardStyle from "../components/CardStyle";
import StyledCardTitle from "../components/StyledCardTitle";
import StyledCardDetails from "../components/StyledCardDetails";

class SurfSpotIndex extends Component {
  render() {
    const { surfSpots, collections, createCollectionSpot } = this.props;
    console.log(surfSpots);
    return (
      <>
        <StyledPageTitle>Surf Spots</StyledPageTitle>
        <br />
        <CardFormat>
          {surfSpots &&
            surfSpots.map((surfSpot) => {
              return (
                <CardStyle key={surfSpot.id}>
                  <div>
                    <Link to={`/surfspotshow/${surfSpot.id}`}>
                      <StyledCardTitle>{surfSpot.name}</StyledCardTitle>
                    </Link>
                    <StyledCardDetails>
                      {surfSpot.description}
                    </StyledCardDetails>
                    <select >
                      {collections?.map((collection) => {
                        return (
                          <option onClick={() => {
                            console.log("running function")
                            createCollectionSpot(collection.id, surfSpot.id)}} 
                            key={collection.id} value={collection.id}>
                            {collection.name}
                          </option>
                        );
                      })}
                    </select>
                    {/* <button onClick={() => createCollectionSpot(collection.id, surfSpot.id)}>+</button> */}
                  </div>
                </CardStyle>
              );
            })}
        </CardFormat>
      </>
    );
  }
}

export default SurfSpotIndex;
