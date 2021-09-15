import React, { Component } from "react";
import { Link } from "react-router-dom";
import StyledPageTitle from "../components/StyledPageTitle";
import CardFormat from "../components/CardFormat";
import CardStyle from "../components/CardStyle";
import StyledCardTitle from "../components/StyledCardTitle";
import StyledCardDetails from "../components/StyledCardDetails";

class SurfSpotIndex extends Component {
  render() {
    const { surfSpots, collections } = this.props;
    console.log(surfSpots);
    return (
      <>
        <StyledPageTitle>Surf Spots</StyledPageTitle>
        <br />
        <CardFormat>
          {surfSpots &&
            surfSpots.map((surfSpot) => {
              return (
                <CardStyle>
                  <div>
                    <Link key={surfSpot.id} to={`/surfspotshow/${surfSpot.id}`}>
                      <StyledCardTitle>{surfSpot.name}</StyledCardTitle>
                    </Link>
                    <StyledCardDetails>
                      {surfSpot.description}
                    </StyledCardDetails>
                    <select>
                      {collections?.map((collection) => {
                        return (
                          <option value={collection.id}>
                            {collection.name}
                          </option>
                        );
                      })}
                    </select>
                    <button>+</button>
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
