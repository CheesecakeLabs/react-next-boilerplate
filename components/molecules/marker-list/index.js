import React from 'react'
import PropTypes from 'prop-types'

import PopupMarker from '_components/atoms/popup-marker'

const MarkerList = ({ markers }) => {
  const items = markers.map(({ key, ...props }) => <PopupMarker key={key} {...props} />)
  return <div>{items}</div>
}

MarkerList.propTypes = {
  markers: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default MarkerList
