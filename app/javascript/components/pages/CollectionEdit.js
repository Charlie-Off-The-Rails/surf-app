import React, { Component } from "react";
import CollectionForm from "../components/CollectionForm";

class CollectionEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: this.props.collection ? this.props.collection.name : "",
        description: this.props.collection
          ? this.props.collection.description
          : "",
        priority: this.props.collection ? this.props.collection.priority : "",
        user_id: this.props.user_id,
      },
      submitted: false,
    };
  }

  handleChange = (e) => {
    let { form } = this.state;
    form[e.target.name] = e.target.value;
    this.setState({ form: form });
  };

  handleSubmit = () => {
    this.props.editCollection(this.state.form, this.props.collection.id);
    this.setState({ submitted: true });
  };

  render() {
    return (
      <>
        <StyledPageTitle>Edit your Collection</StyledPageTitle>
        <CollectionForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          collectionInfo={this.state.form}
          submitted={this.state.submitted}
          title={this.state.form.name}
        />
      </>
    )
  }
}

export default CollectionEdit;
