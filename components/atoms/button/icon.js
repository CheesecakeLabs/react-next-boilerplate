import React from 'react'
import PropTypes from 'prop-types'

import DefaultIcon from '_components/atoms/icon'

const Icon = ({ src, alt, className }) => <DefaultIcon className={className} src={src} alt={alt} />

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Icon.defaultProps = {
  className: undefined,
}

export default Icon
