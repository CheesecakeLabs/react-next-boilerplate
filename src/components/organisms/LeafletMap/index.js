import React, { createRef, Component } from 'react'
import PropTypes from 'prop-types'

import MarkerList from '../../molecules/MarkerList'
import { isBrowser, GoogleLayer, Map, TileLayer } from '../../../utils/LeafletElements'

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

  setPosition = () => [this.props.lat, this.props.lng]

  handleClick = () => {
    this.mapRef.current.leafletElement.locate()
  }

  mapRef = createRef()

  render() {
    const mapDimensions = {
      width: this.props.width,
      height: this.props.height,
    }

    return isBrowser ? (
      <div>
        <Map
          center={this.setPosition()}
          zoom={this.props.zoom}
          onClick={this.handleClick}
          style={mapDimensions}
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
  width: PropTypes.number,
  height: PropTypes.number,
}

LeafletWrapper.defaultProps = {
  zoom: 13,
  hasGoogleLayer: false,
  markers: [],
  width: 500,
  height: 300,
}

export default LeafletWrapper
