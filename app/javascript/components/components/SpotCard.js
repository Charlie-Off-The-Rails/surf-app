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

    getWeatherData = async (latitude, longitude) => {
      const api_key = process.env.REACT_APP_API_KEY
      console.log(api_key)
      const response = await fetch(`https://api.worldweatheronline.com/premium/v1/marine.ashx?key=${api_key}&q=${latitude},${longitude}&format=json&tp=24&tide=yes`)

      

      const result = await response.json()
      console.log(result)
      return result
    }

    componentDidMount = () => {
    this.getWeatherData(this.props.surfSpot.latitude, this.props.surfSpot.longitude)
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
