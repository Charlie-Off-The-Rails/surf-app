import React, { Component } from "react";
import { Link } from "react-router-dom";
import CardFormat from "../components/CardFormat";
import CardStyle from "../components/CardStyle";
import StyledCardTitle from "../components/StyledCardTitle";
import StyledCardDetails from "../components/StyledCardDetails";
import StyledButton from "../components/StyledButton";

class SurfSpotShow extends Component {
  render() {
    const { surfSpot } = this.props;
    return (
      <>
        <CardFormat>
          <CardStyle>
            <StyledCardTitle>{surfSpot.name}</StyledCardTitle>
            <StyledCardDetails>{surfSpot.description}</StyledCardDetails>
            <StyledCardDetails>{`Bottom: ${surfSpot.bottom}`}</StyledCardDetails>
            <StyledCardDetails>{`Tide: ${surfSpot.tide}`}</StyledCardDetails>
            <StyledCardDetails>{`Swell Direction: ${surfSpot.bottom} degrees`}</StyledCardDetails>
            <Link to="/surfspotindex">
              <StyledButton>Back</StyledButton>
            </Link>
          </CardStyle>
        </CardFormat>
      </>
    );
  }
}

export default SurfSpotShow;
