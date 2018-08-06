import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const Logo = ({ src, alt }) => (
  <div className={styles.brand}>
    <img className={styles.brandImage} src={src} alt={alt} />
  </div>
)

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default Logo
