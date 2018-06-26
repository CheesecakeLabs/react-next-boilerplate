import React, { createRef, Component } from 'react'
import PropTypes from 'prop-types'

import markerIcon from '_images/icon.png'

import MarkerList from '../../molecules/MarkerList'
import { isBrowser, GoogleLayer, Icon, Map, TileLayer } from '../../../utils/LeafletElements'

import styles from './styles.css'

let IconMarker
const road = 'ROADMAP'

class LeafletWrapper extends Component {
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

  setPosition = () => [this.props.lat, this.props.lng]

  setMarkers = () => [
    { key: 'marker1', position: [51.5, -0.1], icon: new Icon.Default() },
    { key: 'marker2', position: [51.51, -0.1], title: 'My second popup', icon: IconMarker },
    { key: 'marker3', position: [51.49, -0.05], title: 'My third popup', icon: IconMarker },
  ]

  render() {
    return isBrowser ? (
      <div>
        <Map
          center={this.setPosition()}
          zoom={this.props.zoom}
          onClick={this.handleClick}
          className={styles.map}
        >
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {this.props.markers.length > 0 && <MarkerList markers={this.setMarkers()} />}
          {this.props.hasGoogleLayer && (
            <GoogleLayer googlekey={process.env.GOOGLE_MAPS_API_KEY} maptype={road} />
          )}
        </Map>
      </div>
    ) : (
      <div>Loading map</div>
    )
  }
}

LeafletWrapper.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  zoom: PropTypes.number,
  hasGoogleLayer: PropTypes.bool,
  markers: PropTypes.arrayOf(PropTypes.object),
}

LeafletWrapper.defaultProps = {
  zoom: 13,
  hasGoogleLayer: false,
  markers: [],
}

export default LeafletWrapper
