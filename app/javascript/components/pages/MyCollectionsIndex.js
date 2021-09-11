import React, { Component } from 'react'
import { Link } from 'react-router-dom';

 class MyCollectionIndex extends Component {
    render() {
        const { collections } = this.props
        return (
            <>
                <p>This is the collections index page!</p>
                <div>
                    {collections && collections.map(collection => {
                         return (
                            <div key={collection.id}>
                                <ul>
                                    <li>
                                         {`This is my ${collection.name} collection.`} 
                                    </li>
                                    <li>
                                         {`Description: ${collection.name} collection.`} 
                                    </li>
                                    <li>
                                         {`Priority: ${collection.priority}.`} 
                                    </li>
                                </ul>
                            </div>
                         )
                    })}
                </div>
                
            </>
        )
    }
}

export default MyCollectionIndex
