import React, { Component } from 'react'

 class CollectionNew extends Component {
    render() {
        return (
            <>
                <p>This is the collection new page!</p>
                <form>
                    <label for="name">Name:</label>
                    <input type="text"/>
                    <label for="description">Description:</label>
                    <input type="text"/>
                    <label for="priority">Priority:</label>
                    <input type="integer"/>
                    <button></button>
                </form>
            </>
        )
    }
}

export default CollectionNew
