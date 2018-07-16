import React from 'react'
import PropTypes from 'prop-types'

import IconButton from '_molecules/icon-button'
import close from '_images/close-icon.svg'

import styles from './styles.css'

const Dialog = ({ isOpen, title, onCancelClick, children }) => (
  <div>
    {!isOpen ? null : (
      <div className={styles.dialog}>
        <div className={styles.content}>
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
      </div>
    )}
  </div>
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
