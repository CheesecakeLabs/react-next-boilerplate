import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.css'

const ModalFooter = ({ className, children }) => (
  <div className={classNames(styles.modalFooter, className)}>
    <div className={classNames(styles.modalText, className)}>{children}</div>
  </div>
)

ModalFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

ModalFooter.defaultProps = {
  className: undefined,
}
export default ModalFooter
