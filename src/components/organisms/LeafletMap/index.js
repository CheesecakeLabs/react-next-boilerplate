import React, { createRef, Component } from 'react'
import PropTypes from 'prop-types'
import { isBrowser, GoogleLayer, Map, TileLayer, LayersControl } from '_utils/LeafletElements'

import Mapbox from '../MapboxMap'
import MarkerList from '../../molecules/MarkerList'

const road = 'ROADMAP'

class LeafletWrapper extends Component {
  setPosition = () => [this.props.lat, this.props.lng]

  mapRef = createRef()

  handleClick = () => {
    this.mapRef.current.leafletElement.locate()
  }

  render() {
    const BaseLayer = isBrowser ? LayersControl.BaseLayer : null
    const mapDimensions = {
      width: this.props.width,
      height: this.props.height,
    }

    return isBrowser ? (
      <div>
        {!this.props.showMapbox ? (
          <Map
            center={this.setPosition()}
            zoom={this.props.zoom}
            onClick={this.handleClick}
            style={mapDimensions}
          >
            {this.props.showLayersControls ? (
              <LayersControl position="topright">
                <BaseLayer checked name="Default color">
                  <TileLayer
                    attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                </BaseLayer>
                <BaseLayer name="Black and White">
                  <TileLayer
                    attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
                  />
                </BaseLayer>
              </LayersControl>
            ) : (
              <TileLayer
                attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            )}
            {this.props.markers.length > 0 && <MarkerList markers={this.props.markers} />}
            {this.props.hasGoogleLayer && (
              <GoogleLayer googlekey={process.env.GOOGLE_MAPS_API_KEY} maptype={road} />
            )}
          </Map>
        ) : (
          <Mapbox />
        )}
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
  showLayersControls: PropTypes.bool,
  showMapbox: PropTypes.bool,
}

LeafletWrapper.defaultProps = {
  zoom: 13,
  hasGoogleLayer: false,
  markers: [],
  width: 500,
  height: 300,
  showLayersControls: true,
  showMapbox: false,
}

export default LeafletWrapper
