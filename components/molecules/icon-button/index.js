import React from 'react'
import PropTypes from 'prop-types'

import Button from '_components/atoms/button'
import Icon from '_components/atoms/icon'

const IconButton = ({ onClick, disabled, className, iconURL, iconDescription }) => (
  <Button onClick={onClick} disabled={disabled} className={className}>
    <Icon src={iconURL} alt={iconDescription} />
  </Button>
)

IconButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  iconURL: PropTypes.string.isRequired,
  iconDescription: PropTypes.string.isRequired,
}

IconButton.defaultProps = {
  disabled: false,
  className: undefined,
  onClick: () => {},
}

export default IconButton
