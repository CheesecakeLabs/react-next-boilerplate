import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import IconButton from '_molecules/icon-button'
import close from '_images/close-icon.svg'
import Overlay from '_atoms/overlay'

import styles from './styles.css'

const Dialog = ({ isOpen, title, onCancelClick, children }) => (
  <Overlay show={isOpen}>
    <div
      className={classNames(styles.content, { [styles.opened]: isOpen, [styles.closed]: !isOpen })}
    >
      <IconButton
        className={styles.close}
        iconClassName={styles.iconClose}
        onClick={onCancelClick}
        icon={close}
        alt="Close button"
      />
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
