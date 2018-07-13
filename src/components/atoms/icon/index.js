import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ className, icon }) => <img className={className} src={icon} alt="close" />

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Icon.defaultProps = {
  className: undefined,
}

export default Icon
