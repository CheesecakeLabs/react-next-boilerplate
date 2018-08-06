import React from 'react'
import PropTypes from 'prop-types'

import { isBrowser, Marker, Popup, Icon } from '_utils/leaflet-elements'

const PopupMarker = ({ title, position, icon, placeholder }) =>
  isBrowser ? (
    <Marker position={position} icon={icon}>
      {title && (
        <Popup>
          <span>{title}</span>
        </Popup>
      )}
    </Marker>
  ) : (
    <div>{placeholder}</div>
  )

PopupMarker.propTypes = {
  title: PropTypes.string,
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  icon: PropTypes.instanceOf(Icon).isRequired,
  placeholder: PropTypes.string,
}

PopupMarker.defaultProps = {
  title: '',
  placeholder: 'Loading map',
}

export default PopupMarker
