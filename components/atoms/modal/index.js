import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Portal } from 'react-portal'

import styles from './styles.css'

const Modal = ({ isOpen, styleOverlay, styleBox, children }) => (
  <Portal>
    <div className={classNames(styles.modal, styleOverlay, { [styles.open]: isOpen })}>
      <div className={classNames(styles.box, styleBox)}>{children}</div>
    </div>
  </Portal>
)

Modal.propTypes = {
  isOpen: PropTypes.bool,
  styleOverlay: PropTypes.string,
  styleBox: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Modal.defaultProps = {
  isOpen: false,
  styleOverlay: undefined,
  styleBox: undefined,
}

export default Modal
