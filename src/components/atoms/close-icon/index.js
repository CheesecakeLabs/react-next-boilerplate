import React from 'react'
import PropTypes from 'prop-types'

import closeIcon from '_images/close.svg'

import styles from './styles.css'

const CloseIcon = ({ text, onClick }) => (
  <button onClick={onClick} className={styles.closeButton}>
    <img className={styles.icon} src={closeIcon} alt={text} />
  </button>
)

CloseIcon.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
}

CloseIcon.defaultProps = {
  onClick: () => {},
  text: undefined,
}

export default CloseIcon
