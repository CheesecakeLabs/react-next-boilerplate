import React, { createRef, Component } from 'react'

import markerIcon from '_images/icon.png'

import { isBrowser, GoogleLayer, Icon, Map, TileLayer, Marker, Popup } from '../leafletLibs'

import styles from './styles.css'

let IconMarker
const road = 'ROADMAP'

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
    isBrowser,
  }

  componentDidMount() {
    if (isBrowser) {
      IconMarker = new Icon({
        iconUrl: markerIcon,
        iconSize: [38, 46],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
        shadowUrl: markerIcon,
        shadowSize: [68, 46],
        shadowAnchor: [22, 94],
      })

      this.setState({ isBrowser })
    }
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

    return isBrowser ? (
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

          <GoogleLayer googlekey="AIzaSyBdgTtj8NTssQCF9LJl-TfX4xbP4qUoMeI" maptype={road} />
        </Map>
      </div>
    ) : (
      <div>Loading map</div>
    )
  }
}