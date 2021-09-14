import React, { Component } from "react"
import { Link } from "react-router-dom"

class SurfSpotIndex extends Component {
  render() {
    const { surfSpots } = this.props
    console.log(surfSpots)
    return (
      <>
        <p>This is the surf spot index page!</p>
        <div>
          {surfSpots &&
            surfSpots.map((surfSpot) => {
              return (
                <Link key={surfSpot.id} to={`/surfspotshow/${surfSpot.id}`}>
                  <div className="border-2 border-red-400">
                    <ul>
                      <li>{`Surf Spot: ${surfSpot.name}.`}</li>
                      <li>{`Description: ${surfSpot.description} surfSpot.`}</li>
                    </ul>
                  </div>
                </Link>
              )
            })}
        </div>
      </>
    )
  }
}

export default SurfSpotIndex
