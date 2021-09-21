import React, { Component } from "react";
import { Link } from "react-router-dom";
import CardFormat from "../components/CardFormat";
import CardStyle from "../components/CardStyle";
import StyledCardTitle from "../components/StyledCardTitle";
import StyledCardDetails from "../components/StyledCardDetails";
import StyledButton from "../components/StyledButton";

class SurfSpotShow extends Component {
  render() {
    const { surfSpot, spotData } = this.props;
    return (
      <>
        <div className="pt-10">
          <CardFormat>
            <CardStyle>
              <StyledCardTitle>{surfSpot.name}</StyledCardTitle>
              <StyledCardDetails>{surfSpot.description}</StyledCardDetails>
              <StyledCardDetails>{`Bottom: ${surfSpot.bottom}`}</StyledCardDetails>
              <StyledCardDetails>{`Tide: ${surfSpot.tide}`}</StyledCardDetails>
              <StyledCardDetails>{`Ideal Swell Direction(s): ${surfSpot.swell_direction} `}</StyledCardDetails>
              <StyledCardDetails>{`Ideal Wind Direction(s): ${surfSpot.wind_direction}`}</StyledCardDetails>
              {spotData && (
                <>
                  <StyledCardDetails>Current Swell Direction: {spotData.swellDir}</StyledCardDetails>
                  <StyledCardDetails>Current Wind Direction: {spotData.windDir}</StyledCardDetails>
                  <StyledCardDetails>Current Swell Height: {spotData.swellHeight} ft</StyledCardDetails>
                  <StyledCardDetails>Current Surf Height: {spotData.surfHeight} ft</StyledCardDetails>
                  <StyledCardDetails>Current Water Temperature: {spotData.waterTemp}°F</StyledCardDetails>
                </>
              )}

              <Link to="/surfspotindex">
                <StyledButton>Back</StyledButton>
              </Link>
            </CardStyle>
          </CardFormat>
        </div>
      </>
    );
  }
}

export default SurfSpotShow;
