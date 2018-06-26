import React, { createRef, Component } from 'react'
import PropTypes from 'prop-types'

import MarkerList from '../../molecules/MarkerList'
import { isBrowser, GoogleLayer, Map, TileLayer } from '../../../utils/LeafletElements'

import styles from './styles.css'

const road = 'ROADMAP'

class LeafletWrapper extends Component {
  state = {
    isBrowser,
  }

  componentDidMount() {
    if (isBrowser) {
      this.setState({ isBrowser })
    }
  }

  mapRef = createRef()

  handleClick = () => {
    this.mapRef.current.leafletElement.locate()
  }

  setPosition = () => [this.props.lat, this.props.lng]

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
          {this.props.markers.length > 0 && <MarkerList markers={this.props.markers} />}
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
