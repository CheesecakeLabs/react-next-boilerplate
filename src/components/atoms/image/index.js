import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import styles from './styles.css'

const Image = ({ className, image, alt }) => (
  <img className={classNames(styles.button, className)} src={image} alt={alt} />
)

Image.propTypes = {
  image: PropTypes.string.isRequired,
  className: PropTypes.string,
  alt: PropTypes.string.isRequired,
}

Image.defaultProps = {
  className: undefined,
}

export default Image
