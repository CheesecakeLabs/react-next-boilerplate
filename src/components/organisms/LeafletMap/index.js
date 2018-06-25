import React, { createRef, Component } from 'react'

import markerIcon from '_images/icon.png'

import styles from './styles.css'

let LT
let RL
let Map
let TileLayer
let Marker
let Popup
let Icon
let IconMarker

const PopupMarker = ({ children, position, icon }) => (
  <Marker position={position} icon={icon}>
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
  }

  componentDidMount() {
    if (!RL) {
      RL = require('react-leaflet')
    }
    if (!LT) {
      LT = require('leaflet')
    }

    IconMarker = new LT.Icon({
      iconUrl: markerIcon,
      iconSize: [38, 46],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
      shadowUrl: markerIcon,
      shadowSize: [68, 46],
      shadowAnchor: [22, 94],
    })

    Map = RL.Map
    TileLayer = RL.TileLayer
    Marker = RL.Marker
    Popup = RL.Popup
    Icon = RL.Icon

    this.setState({ showMap: true })
  }

  mapRef = createRef()

  handleClick = () => {
    this.mapRef.current.leafletElement.locate()
  }

  render() {
    const position = [this.props.lat, this.props.lng]
    const markers = [
      { key: 'marker1', position: [51.5, -0.1], children: 'My first popup', icon: IconMarker },
      { key: 'marker2', position: [51.51, -0.1], children: 'My second popup', icon: IconMarker },
      { key: 'marker3', position: [51.49, -0.05], children: 'My third popup', icon: IconMarker },
    ]

    return this.state.showMap ? (
      <div>
        <Map
          center={position}
          zoom={this.props.zoom}
          onClick={this.handleClick}
          className={styles.map}
        >
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MarkersList markers={markers} />
        </Map>
      </div>
    ) : (
      <div>Loading map</div>
    )
  }
}
