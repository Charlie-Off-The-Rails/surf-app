import React, { Component } from "react";

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

  render() {
    return <>
    
    </>;
  }
}

export default CollectionEdit;
