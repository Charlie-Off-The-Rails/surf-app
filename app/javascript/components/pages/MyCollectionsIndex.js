import React, { Component } from 'react'
import { Link } from 'react-router-dom';

 class MyCollectionIndex extends Component {
    render() {
        const { collections } = this.props
        console.log(collections)
        return (
            <>
                <p>This is the collections index page!</p>
                <div>
                    {collections?.map(collection => {
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
                                    <a href={`/mycollectionsshow/${collection.id}`}> 
                                        Details 
                                    </a>
                                    <h2>Spots:</h2>
                                    { collection?.spots.map(spot => {
                                        return (
                                            <p key={spot.id}> { `${spot.name}` } </p>
                                        )
                                    })}
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
