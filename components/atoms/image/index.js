import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import styles from './styles.css'

const Image = ({ className, src, alt }) => (
  <img className={classNames(styles.image, className)} src={src} alt={alt} />
)

Image.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
  alt: PropTypes.string.isRequired,
}

Image.defaultProps = {
  src: undefined,
  className: undefined,
}

export default Image
