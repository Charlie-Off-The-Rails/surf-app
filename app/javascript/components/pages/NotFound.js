import React, { Component } from "react";
import notfound from "../assets/notfound.png";
 
class NotFound extends Component {
  render() {
    return (
      <>
        <div className="flex justify-center pb-10">
          <img src={notfound} alt="Man sitting on beach with surfboard leaning on head with text displaying 'Sorry dude, that page does not exist.'" />
        </div>
      </>
    );
  }
}

export default NotFound;
