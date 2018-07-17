import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const Overlay = ({ children }) => <div className={styles.overlay}>{children}</div>

Overlay.propTypes = {
  children: PropTypes.node,
}

Overlay.defaultProps = {
  children: undefined,
}

export default Overlay
