import React from 'react'
import PropTypes from 'prop-types'

import Button from '_atoms/button'

import styles from './styles.css'

const Dialog = ({
  isOpen,
  title,
  onContinueClick,
  onCancelClick,
  continueText,
  cancelText,
  children,
}) => (
  <div>
    {!isOpen ? null : (
      <div className={styles.image_preview__modal}>
        <div className={styles.image_preview__modal_content}>
          <h1>{title}</h1>
          <div className={styles.image__wrapper}>{children}</div>
          <div className={styles.image_preview__modal_buttons}>
            {/* <Button text={continueText} onClick={onContinueClick}/> */}
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
  continueText: PropTypes.string,
  cancelText: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Dialog.defaultProps = {
  isOpen: false,
  title: '',
  onContinueClick: () => {},
  onCancelClick: () => {},
  continueText: '',
  cancelText: '',
}

export default Dialog
