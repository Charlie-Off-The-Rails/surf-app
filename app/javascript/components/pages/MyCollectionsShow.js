import React, { Component } from "react";
import { Link } from "react-router-dom";
import CardFormat from "../components/CardFormat";
import CardStyle from "../components/CardStyle";
import StyledCardTitle from "../components/StyledCardTitle";
import StyledCardDetails from "../components/StyledCardDetails";
import StyledButton from "../components/StyledButton";

class MyCollectionsShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
    };
  }

  render() {
    const { collection } = this.props;
    return (
      <>
        <CardFormat>
          {collection && (
            <CardStyle>
              <StyledCardTitle>{collection.name}</StyledCardTitle>
              <StyledCardDetails>{collection.description}</StyledCardDetails>
              <Link to={`/collectionedit/${collection.id}`}>
                <StyledButton>Edit</StyledButton>
              </Link>
              <Link to="/mycollectionsindex">
                <StyledButton
                  type="submit"
                  onClick={() => this.props.deleteCollection(collection.id)}
                >
                  Delete
                </StyledButton>
              </Link>
            </CardStyle>
          )}
        </CardFormat>
      </>
    );
  }
}

export default MyCollectionsShow;
