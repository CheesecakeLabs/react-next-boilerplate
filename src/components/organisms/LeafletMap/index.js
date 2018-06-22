import React from 'react'

import styles from './styles.css'

let Map
let TileLayer
let Marker
let Popup
const outer = [[50.505, -29.09], [52.505, 29.09]]

export default class LeafletWrapper extends React.Component {
  state = {
    showMap: false,
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
    bounds: outer,
  }

  componentDidMount() {
    let RL = require('react-leaflet')
    Map = RL.Map
    TileLayer = RL.TileLayer
    Marker = RL.Marker
    Popup = RL.Popup

    this.setState({ showMap: true })
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return this.state.showMap ? (
      <Map center={position} zoom={13} className={styles.map}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position}>
          <Popup>A pretty CSS3 popup.</Popup>
        </Marker>
      </Map>
    ) : (
      <div>Loading map</div>
    )
  }
}
