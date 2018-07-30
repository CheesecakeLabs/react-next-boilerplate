import React, { Component } from 'react'
import ReactMapGL, { NavigationControl } from 'react-map-gl'

class Mapbox extends Component {
  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8,
      bearing: 0,
      pitch: 0,
    },
  }

  updateViewport = viewport => {
    this.setState({ viewport })
  }

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
        onViewportChange={this.updateViewport}
      >
        <div style={{ position: 'absolute', left: 0 }}>
          <NavigationControl onViewportChange={this.updateViewport} />
        </div>
      </ReactMapGL>
    )
  }
}

export default Mapbox
