import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const Dialog = ({ isOpen, title, children }) => (
  <div>
    {!isOpen ? null : (
      <div className={styles.dialog}>
        <div className={styles.content}>
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
  children: PropTypes.node.isRequired,
}

Dialog.defaultProps = {
  isOpen: false,
  title: '',
}

export default Dialog
