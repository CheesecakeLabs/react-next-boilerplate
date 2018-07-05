import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const ErrorMessage = ({ text }) => <p className={styles.error_message__color}>{text}</p>

ErrorMessage.propTypes = {
  text: PropTypes.string.isRequired,
}

export default ErrorMessage
