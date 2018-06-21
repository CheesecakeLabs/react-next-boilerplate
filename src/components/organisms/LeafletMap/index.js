import React from 'react'

let LeafletMap
let TileLayer

export default class LeafletWrapper extends React.Component {
  constructor() {
    super()
    this.state = { showMap: false }
  }

  componentDidMount() {
    let RL = require('react-leaflet')
    LeafletMap = RL.Map
    TileLayer = RL.TileLayer

    this.setState({ showMap: true })
  }

  render() {
    return this.state.showMap ? (
      <LeafletMap center={[48.85692, 2.35268]} zoom={13}>
        <TileLayer
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
      </LeafletMap>
    ) : (
      <div>Loading map</div>
    )
  }
}
