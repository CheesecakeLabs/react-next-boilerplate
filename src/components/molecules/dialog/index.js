import React from 'react'
import PropTypes from 'prop-types'

import Button from '_atoms/button'

import styles from './styles.css'

const Dialog = ({
  isOpen,
  title,
  onContinueClick,
  onCancelClick,
  disableContinueButton,
  continueText,
  cancelText,
  children,
}) => (
  <div>
    {!isOpen ? null : (
      <div className={styles.dialog}>
        <div className={styles.content}>
          <h1>{title}</h1>
          <div className={styles.body}>{children}</div>
          <div className={styles.footer}>
            <Button
              text={continueText}
              disabled={disableContinueButton}
              onClick={onContinueClick}
            />
            <Button text={cancelText} onClick={onCancelClick} />
          </div>
        </div>
      </div>
    )}
  </div>
)

Dialog.propTypes = {
  isOpen: PropTypes.bool,
  title: PropTypes.string,
  onContinueClick: PropTypes.func,
  onCancelClick: PropTypes.func,
  disableContinueButton: PropTypes.bool,
  continueText: PropTypes.string,
  cancelText: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Dialog.defaultProps = {
  isOpen: false,
  title: '',
  onContinueClick: () => {},
  onCancelClick: () => {},
  disableContinueButton: false,
  continueText: 'Continue',
  cancelText: 'Cancel',
}

export default Dialog
