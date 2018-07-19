import React from 'react'
import PropTypes from 'prop-types'

import Icon from '_atoms/icon'

const IconButton = ({ iconURL, onClick }) => (
  <button onClick={onClick}>
    <Icon src={iconURL} />
  </button>
)

Icon.propTypes = {
  iconURL: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

Icon.defaultProps = {
  onClick: () => {},
}

export default IconButton
