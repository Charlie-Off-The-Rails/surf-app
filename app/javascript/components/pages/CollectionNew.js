import React, { Component } from 'react'
import CollectionForm from '../components/CollectionForm'

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
                <CollectionForm 
                    handleChange = { this.handleChange }
                    handleSubmit = { this.handleSubmit }
                    collectionInfo = { this.state.form }
                    submitted = { this.state.submitted }
                />
                
            </>
        )
    }
}

export default CollectionNew
