import React, { Component } from 'react'
import { Link } from "react-router-dom";
import CardStyle from "../components/CardStyle";
import StyledCardTitle from "../components/StyledCardTitle";
import StyledCardDetails from "../components/StyledCardDetails";

class SpotCard extends Component {

    constructor(){
        super()
        this.state = {
            collectionId: ''
        }
    }

    handleChange = (e) => {
        console.log("handleChange is doing this", e.target.value)
        this.setState({collectionId: e.target.value})
    }

    render() {
        const { surfSpot, collections, createCollectionSpot } = this.props;
        return (
            <div>
                <CardStyle key={surfSpot.id}>
                  <div>
                    <Link to={`/surfspotshow/${surfSpot.id}`}>
                      <StyledCardTitle>{surfSpot.name}</StyledCardTitle>
                    </Link>
                    <StyledCardDetails>
                      {surfSpot.description}
                    </StyledCardDetails>
                    <select onChange={this.handleChange} value={this.state.collectionId}>
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
