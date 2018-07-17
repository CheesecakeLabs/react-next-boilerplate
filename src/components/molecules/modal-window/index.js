import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import Title from '_atoms/title'

import Button from '../../atoms/button'

import styles from './styles.css'

const Modal = ({ onClick, iconURL, className, children }) => (
  <div className={classNames(styles.window, className)}>
    <Title className={classNames(styles.modalTitle, className)}>Title1</Title>
    <p className={classNames(styles.modalText, className)}>deus é top</p>
    <Button>teste</Button>
  </div>
)

Modal.propTypes = {
  onClick: PropTypes.func,
  iconURL: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Modal.defaultProps = {
  iconURL: undefined,
  className: undefined,
  onClick: () => {},
}
export default Modal
