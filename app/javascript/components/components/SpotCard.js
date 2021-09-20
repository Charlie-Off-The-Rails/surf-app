import React, { Component } from 'react'
import { Link } from "react-router-dom";
import CardStyle from "../components/CardStyle";
import StyledCardTitle from "../components/StyledCardTitle";
import StyledCardDetails from "../components/StyledCardDetails";

class SpotCard extends Component {

    handleChange = (e) => {
      console.log("handleChange is doing this", e.target.value)
      this.setState({collectionId: e.target.value})
    }

    render() {
        const { surfSpot, collections, createCollectionSpot, spotData } = this.props;
        console.log("spotData:", spotData)
        console.log("surfSpot:", surfSpot)
        console.log("swell direction:", surfSpot.swell_direction)
        console.log("type of direction:", typeof surfSpot.swell_direction)
        return (
            <div>
                <CardStyle key={surfSpot.id}>
                  <div>
                    <Link to={`/surfspotshow/${surfSpot.id}`}>
                      <StyledCardTitle>{surfSpot.name}</StyledCardTitle>
                    </Link>
                    <StyledCardDetails>
                      {surfSpot.description}
                      <p className={surfSpot.swell_direction.includes(spotData.swellDir) ? "text-green-400" : ""}>Current Swell Direction: {spotData.swellDir} </p>
                      <p className={surfSpot.wind_direction.includes(spotData.windDir) ? "text-green-400" : ""}>Current Wind Direction: {spotData.windDir} </p>
                    </StyledCardDetails>
                    <select onChange={this.handleChange} value={surfSpot.collectionId}>
                        <option value="" disabled>
                              Select your Collection
                        </option>
                      {collections?.map((collection) => {
                        return (
                            <option onClick={() => {
                            createCollectionSpot(collection.id, surfSpot.id)}} 
                            key={collection.id} value={collection.id}>
                            {collection.name}
                            </option>
                        );
                      })}
                    </select>
                    <button onClick={() => createCollectionSpot(this.state.collectionId, surfSpot.id)}>+</button>
                  </div>
                </CardStyle>
            </div>
        )
    }
}

export default SpotCard
