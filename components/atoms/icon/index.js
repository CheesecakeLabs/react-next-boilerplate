import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.css'

const Icon = ({ src, alt, className }) => (
  <img className={classNames(styles.icon, className)} src={src} alt={alt} />
)

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Icon.defaultProps = {
  alt: undefined,
  className: undefined,
}

export default Icon
