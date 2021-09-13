import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class CollectionNew extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form:{
                name: "",
                description: "",
                priority: 0,
                user_id: this.props.user_id
            },
            submitted: false
        }
    }

    handleChange = (e) => {
        let { form } = this.state
        form[e.target.name] = e.target.value
        this.setState({form: form})
    }

    handleSubmit = () => {
        this.props.createCollection(this.state.form)
        this.setState({submitted: true})
    }

    render() {
        const { 
            name,
            description,
            priority
        } = this.state.form
        return (
            <>
                <p>This is the collection new page!</p>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input 
                        name="name" 
                        type="text"
                        onChange={this.handleChange}
                        value={name} 
                    />
                    <label htmlFor="description">Description:</label>
                    <input 
                        name="description" 
                        type="text"
                        onChange={this.handleChange}
                        value={description}
                    />
                    <label htmlFor="priority">Priority:</label>
                    <input 
                        name="priority" 
                        type="number" 
                        onChange={this.handleChange}
                        value={priority}
                    />
                    <button type="submit">Submit</button>
                    { this.state.submitted && <Redirect to="/surfspotindex" /> }
                </form>
            </>
        )
    }
}

export default CollectionNew
