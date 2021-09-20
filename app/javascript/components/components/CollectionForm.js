import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import StyledCardTitle from "./StyledCardTitle"

class CollectionForm extends Component {
  render() {
    const { handleChange, submitted, handleSubmit, title } = this.props

    const { name, description, priority } = this.props.collectionInfo

    return (
      <div className="w-full">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-11/12 max-w-screen-md mx-auto mt-12"
          onSubmit={handleSubmit}
        >
          <div className=" w-11/12 max-w-prose mx-auto">
            <StyledCardTitle>{title}</StyledCardTitle>
            <label htmlFor="name">Name:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-dark leading-tight focus:outline-none focus:shadow-outline"
              name="name"
              type="text"
              onChange={handleChange}
              value={name}
            />
            <label htmlFor="description">Description:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-dark leading-tight focus:outline-none focus:shadow-outline"
              name="description"
              type="text"
              onChange={handleChange}
              value={description}
            />
            <label htmlFor="priority">Priority:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-dark leading-tight focus:outline-none focus:shadow-outline"
              name="priority"
              type="number"
              onChange={handleChange}
              value={priority}
            />
            <button
              className="block bg-brown text-white hover:bg-gray-light font-bold m-2 py-2 px-4 rounded-full"
              type="submit"
            >
              Submit
            </button>
            {submitted && <Redirect to="/surfspotindex" />}
          </div>
        </form>
      </div>
    )
  }
}

export default CollectionForm;
