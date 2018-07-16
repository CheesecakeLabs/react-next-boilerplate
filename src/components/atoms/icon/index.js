import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ className, icon, alt }) => <img className={className} src={icon} alt={alt} />

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
  alt: PropTypes.string.isRequired,
}

Icon.defaultProps = {
  className: undefined,
}

export default Icon
