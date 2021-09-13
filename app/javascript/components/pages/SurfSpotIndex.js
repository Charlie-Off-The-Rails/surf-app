import React, { Component } from 'react'

 class SurfSpotIndex extends Component {
    render() {
        const { surfSpots } = this.props
        console.log(surfSpots)
        return (
            <>
                <p>This is the surf spot index page!</p>
                <div>
                    {surfSpots && surfSpots.map(surfSpot => {
                         return (
                            <div key={surfSpot.id}>
                                <ul>
                                    <li>
                                         {`Surf Spot: ${surfSpot.name}.`} 
                                    </li>
                                    <li>
                                         {`Description: ${surfSpot.description} surfSpot.`} 
                                    </li>
                                    <li>
                                         {`Bottom: ${surfSpot.bottom}.`} 
                                    </li>
                                    <li>
                                         {`Tide: ${surfSpot.tide}.`} 
                                    </li>
                                    <li>
                                         {`Swell Direction: ${surfSpot.bottom} degrees.`} 
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

export default SurfSpotIndex
