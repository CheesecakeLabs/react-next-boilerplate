import PropTypes from 'prop-types'
import React from 'react'

import styles from './styles.css'

const Button = ({ click, label }) => (
  <button onClick={click} className={styles.button}>
    {label}
  </button>
)

Button.propTypes = {
  label: PropTypes.string.isRequired,
  click: PropTypes.func,
}

Button.defaultProps = {
  click: null,
}

export default Button
