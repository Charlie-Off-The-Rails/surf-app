import React, { Component } from 'react'

 class SurfSpotShow extends Component {
    render() {
        return (
            <>
                <p>This is the surf spot show page!</p>
                <div>
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
            </>
        )
    }
}


export default SurfSpotShow
