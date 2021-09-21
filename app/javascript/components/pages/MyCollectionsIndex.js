import React, { Component } from "react";
import StyledPageTitle from "../components/StyledPageTitle";
import CardFormat from "../components/CardFormat";
import CardStyle from "../components/CardStyle";
import StyledCardTitle from "../components/StyledCardTitle";
import StyledCardDetails from "../components/StyledCardDetails";
import StyledButton from "../components/StyledButton";
import { Link } from "react-router-dom"

class MyCollectionIndex extends Component {
  render() {
    const { collections } = this.props
    return (
      <>
        <StyledPageTitle>My collections</StyledPageTitle>
        <CardFormat>
          {collections?.map((collection) => {
            return (
              <CardStyle key={collection.id}>
                <ul>
                  <StyledCardTitle>{collection.name}</StyledCardTitle>
                  <StyledCardDetails>
                    {collection.description}
                  </StyledCardDetails>

                  <StyledCardDetails>
                    <li>{`Priority: ${collection.priority}`}</li>
                    <li>
                      <a href={`/mycollectionsshow/${collection.id}`}>
                        <StyledButton>Details</StyledButton>
                      </a>
                    </li>
                  </StyledCardDetails>
                  <br />
                  <h2>Spots:</h2>
                  {collection?.spots.map((spot) => {
                    return (
                      <Link key={spot.id} to={`/surfspotshow/${spot.id}`}>
                        <p className="text-blue-dark hover:text-gray-light">{`${spot.name}`}</p>
                      </Link>
                    )
                  })}
                </ul>
              </CardStyle>
            )
          })}
        </CardFormat>
      </>
    )
  }
}

export default MyCollectionIndex;
