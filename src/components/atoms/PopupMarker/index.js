import React from 'react'
import PropTypes from 'prop-types'

import { isBrowser, Marker, Popup, Icon } from '../../../utils/LeafletElements'

const PopupMarker = ({ title, position, icon }) =>
  isBrowser ? (
    <Marker position={position} icon={icon}>
      {title && (
        <Popup>
          <span>{title}</span>
        </Popup>
      )}
    </Marker>
  ) : (
    <div>Loading map</div>
  )

PopupMarker.propTypes = {
  title: PropTypes.string,
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  icon: PropTypes.instanceOf(Icon),
}

PopupMarker.defaultProps = {
  title: '',
  // icon: new Icon.Default(),
}

export default PopupMarker
