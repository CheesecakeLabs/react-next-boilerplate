import React from 'react'
import PropTypes from 'prop-types'
import Button from '_atoms/button'
import Icon from '_atoms/icon'

const ButtonIcon = ({ iconSrc, iconAlt, children }) => (
  <Button>
    {children}
    <Icon src={iconSrc} alt={iconAlt} />
  </Button>
)

ButtonIcon.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  iconAlt: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default ButtonIcon
