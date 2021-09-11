import React, { Component } from 'react'

 class MyCollectionsShow extends Component {
    render() {
        const { collection } = this.props
        return (
            <>
             { collection &&
                <div>
                    <h1>{ collection.name }</h1>
                    <p>{ collection.description }</p>
                    <p>This is the collection show page!</p>
                </div>
             }
            </>
        )
    }
}

export default MyCollectionsShow
