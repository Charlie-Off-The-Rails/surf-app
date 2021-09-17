import React, { Component } from "react";
import { Link } from "react-router-dom";
import StyledPageTitle from "../components/StyledPageTitle";
import CardFormat from "../components/CardFormat";
import CardStyle from "../components/CardStyle";
import StyledCardTitle from "../components/StyledCardTitle";
import StyledCardDetails from "../components/StyledCardDetails";
import ocean from "../assets/ocean.jpeg";

class SurfSpotIndex extends Component {
  render() {
    const { surfSpots } = this.props;
    console.log(surfSpots);
    return (
      <>
        <StyledPageTitle>Surf Spots</StyledPageTitle>
        <br />
        <CardFormat>
          {surfSpots &&
            surfSpots.map((surfSpot) => {
              return (
                <Link key={surfSpot.id} to={`/surfspotshow/${surfSpot.id}`}>
                  <CardStyle>
                    <ul>
                      <img
                        className="pt-2 w-32 h-32 md:w-48 md:h-auto mx-auto"
                        src={ocean}
                        alt=""
                        width="384"
                        height="512"
                      />
                      <StyledCardTitle>{surfSpot.name}</StyledCardTitle>
                      <StyledCardDetails>
                        {surfSpot.description}
                      </StyledCardDetails>
                    </ul>
                  </CardStyle>
                </Link>
              );
            })}
        </CardFormat>
        
      </>
    );
  }
}

export default SurfSpotIndex;
