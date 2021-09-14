import React, { Component } from 'react'
import { Link } from 'react-router-dom';

 class MyCollectionsShow extends Component {

    constructor(props) {
        super(props);
        this.state = {
          submitted: false,
        };
      }

    render() {
        const { collection } = this.props
        return (
            <>
             { collection &&
                <div>
                    <h1>{ collection.name }</h1>
                    <p>{ collection.description }</p>
                    <p>This is the collection show page!</p>
                    <Link to={`/collectionedit/${collection.id}`}>
                        <button>Edit</button>
                    </Link>
                    <Link to="/mycollectionsindex">
                        <button 
                            type="submit" 
                            onClick={() => this.props.deleteCollection(collection.id)}
                        >
                        Delete
                        </button>
                    </Link>
                </div>
             }
            </>
        )
    }
}

export default MyCollectionsShow
