import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.css'

const Overlay = ({ show, children }) => (
  <div className={classNames(styles.overlay, { [styles.opened]: show, [styles.closed]: !show })}>
    {children}
  </div>
)

Overlay.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.node,
}

Overlay.defaultProps = {
  show: false,
  children: undefined,
}

export default Overlay
