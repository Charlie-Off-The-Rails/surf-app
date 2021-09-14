import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class CollectionForm extends Component {

    render() {
        const { 
            handleChange,
            submitted,
            handleSubmit
        } = this.props

        const { 
            name,
            description,
            priority
        } = this.props.collectionInfo

        return (
            
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input 
                        name="name" 
                        type="text"
                        onChange={handleChange}
                        value={name} 
                    />
                    <label htmlFor="description">Description:</label>
                    <input 
                        name="description" 
                        type="text"
                        onChange={handleChange}
                        value={description}
                    />
                    <label htmlFor="priority">Priority:</label>
                    <input 
                        name="priority" 
                        type="number" 
                        onChange={handleChange}
                        value={priority}
                    />
                    <button type="submit">Submit</button>
                    { submitted && <Redirect to="/surfspotindex" /> }
                </form>
            
        )
    }
}

export default CollectionForm
