import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.css'

const ModalHeader = ({ className, children, closeIcon }) => (
  <div className={classNames(styles.modalHeader, className)}>
    <h1 className={classNames(styles.modalTitle, className)}>{children}</h1>
    {closeIcon}
  </div>
)

ModalHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  closeIcon: PropTypes.node,
}

ModalHeader.defaultProps = {
  closeIcon: undefined,
  className: undefined,
}
export default ModalHeader
