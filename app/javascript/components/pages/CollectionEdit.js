import React, { Component } from "react";
import CollectionForm from "../components/CollectionForm";

class CollectionEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: "",
        description: "",
        priority: 0,
        user_id: this.props.user_id,
      },
      submitted: false,
    };
  }

  handleChange = (e) => {
    let { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({form: form})
}

handleSubmit = () => {
    this.props.updateCollection(this.state.form)
    this.setState({submitted: true})
}


  render() {
    return <>
            <CollectionForm 
              handleChange = { this.handleChange }
              handleSubmit = { this.handleSubmit }
              collectionInfo = { this.state.form }
              submitted = { this.state.submitted }
            />
     </>;
  }
}

export default CollectionEdit;
