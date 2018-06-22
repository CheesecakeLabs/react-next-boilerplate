import React, { createRef, Component } from 'react'

import styles from './styles.css'

let Map
let TileLayer
let Marker
let Popup
const outer = [[50.505, -29.09], [52.505, 29.09]]

const PopupMarker = ({ children, position }) => (
  <Marker position={position}>
    <Popup>
      <span>{children}</span>
    </Popup>
  </Marker>
)

const MarkersList = ({ markers }) => {
  const items = markers.map(({ key, ...props }) => <PopupMarker key={key} {...props} />)
  return <div style={{ display: 'none' }}>{items}</div>
}

export default class LeafletWrapper extends Component {
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

  mapRef = createRef()

  handleClick = () => {
    this.mapRef.current.leafletElement.locate()
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    const markers = [
      { key: 'marker1', position: [51.5, -0.1], children: 'My first popup' },
      { key: 'marker2', position: [51.51, -0.1], children: 'My second popup' },
      { key: 'marker3', position: [51.49, -0.05], children: 'My third popup' },
    ]

    return this.state.showMap ? (
      <Map center={position} zoom={13} onClick={this.handleClick} className={styles.map}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkersList markers={markers} />
      </Map>
    ) : (
      <div>Loading map</div>
    )
  }
}
