import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.css'

const POSITION = {
  left: styles.left,
  right: styles.right,
  center: styles.center,
}

const ModalFooter = ({ position, className, children }) => (
  <div className={classNames(styles.footer, POSITION[position], className)}>{children}</div>
)

ModalFooter.propTypes = {
  position: PropTypes.oneOf(['left', 'right', 'center']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

ModalFooter.defaultProps = {
  position: 'right',
  className: undefined,
}
export default ModalFooter
