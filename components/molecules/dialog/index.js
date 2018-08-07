import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import close from '_components/assets/icons/close-icon.svg'
import Overlay from '_components/atoms/overlay'
import Button from '_components/atoms/button'

import styles from './styles.css'

const Dialog = ({ isOpen, title, onCancelClick, children }) => (
  <Overlay show={isOpen}>
    <div
      className={classNames(styles.content, { [styles.opened]: isOpen, [styles.closed]: !isOpen })}
    >
      <Button onClick={onCancelClick} className={styles.close}>
        <Button.Icon src={close} alt="Close button" className={styles.iconClose} />
      </Button>
      <p className={styles.title}>{title}</p>
      <div className={styles.body}>{children}</div>
    </div>
  </Overlay>
)

Dialog.propTypes = {
  isOpen: PropTypes.bool,
  title: PropTypes.string,
  onCancelClick: PropTypes.func,
  children: PropTypes.node.isRequired,
}

Dialog.defaultProps = {
  isOpen: false,
  title: '',
  onCancelClick: () => {},
}

export default Dialog
