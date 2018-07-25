import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const Icon = ({ src, text }) => <img className={styles.icon} src={src} alt={text} />

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

Icon.defaultProps = {
  text: undefined,
}

export default Icon
