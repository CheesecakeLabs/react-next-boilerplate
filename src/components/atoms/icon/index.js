import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const Icon = ({ src }) => <img className={styles.icon} src={src} alt="icon" />

Icon.propTypes = {
  src: PropTypes.string.isRequired,
}

export default Icon
