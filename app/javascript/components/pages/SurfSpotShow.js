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
        <div className="pt-10 w-11/12 max-w-screen-md mx-auto">
          <CardStyle>
            <StyledCardTitle>{surfSpot.name}</StyledCardTitle>
            <StyledCardDetails>
              <p className="mx-auto">{surfSpot.description}</p>
              <p className="mx-auto">{`Bottom: ${surfSpot.bottom}`}</p>
              <p className="mx-auto">{`Tide: ${surfSpot.tide}`}</p>
              <p className="mx-auto">{`Ideal Swell Direction(s): ${surfSpot.swell_direction} `}</p>
              <p className="mx-auto">{`Ideal Wind Direction(s): ${surfSpot.wind_direction}`}</p>
              {spotData && (
                <>
                  <p
                    className={
                      surfSpot.swell_direction.includes(spotData.swellDir)
                        ? "text-green-400 mx-auto"
                        : "mx-auto"
                    }
                  >
                    Current Swell Direction: {spotData.swellDir}
                  </p>
                  <p
                    className={
                      surfSpot.wind_direction.includes(spotData.windDir)
                        ? "text-green-400 mx-auto"
                        : "mx-auto"
                    }
                  >
                    Current Wind Direction: {spotData.windDir}
                  </p>
                  <p className="mx-auto">
                    Current Swell Height: {spotData.swellHeight} ft
                  </p>
                  <p className="mx-auto">
                    Current Surf Height: {spotData.surfHeight} ft
                  </p>
                  <p className="mx-auto">
                    Current Water Temperature: {spotData.waterTemp}°F
                  </p>
                </>
              )}
            </StyledCardDetails>

            <Link to="/surfspotindex">
              <StyledButton>Back</StyledButton>
            </Link>
          </CardStyle>
        </div>
      </>
    )
  }
}

export default SurfSpotShow;
