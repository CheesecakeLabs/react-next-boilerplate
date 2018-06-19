import PropTypes from 'prop-types'
import React from 'react'
import Link from 'next/link'

import styles from './styles.css'

const Button = ({ click, label }) => (
  <button onClick={click} className={styles.button}>
    {label}
  </button>
)

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  onClick: null,
}

export default Button
