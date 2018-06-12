import PropTypes from 'prop-types'
import React from 'react'
import Link from 'next/link'

import styles from './styles.css'

const Button = props => (
  <button onClick={props.click} className={styles.button}>
    {props.label}
  </button>
)

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  link: PropTypes.string,
}

Button.defaultProps = {
  onClick: null,
  link: '',
}

export default Button
