import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import styles from './styles.css'

const Image = ({ className, src, alt }) => (
  <img className={classNames(styles.button, className)} src={src} alt={alt} />
)

Image.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  alt: PropTypes.string.isRequired,
}

Image.defaultProps = {
  className: undefined,
}

export default Image
