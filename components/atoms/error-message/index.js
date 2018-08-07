import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const ErrorMessage = ({ children }) => <p className={styles.errorMessage}>{children}</p>

ErrorMessage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ErrorMessage
