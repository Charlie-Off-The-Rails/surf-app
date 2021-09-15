import React, { Component } from "react";

class StyledForm extends Component {
  render() {
    return (
      <form className="bg-white border-2 rounded-xl shadow-2xl w-full h-full">
        {this.props.children}
      </form>
    );
  }
}

export default StyledForm;
