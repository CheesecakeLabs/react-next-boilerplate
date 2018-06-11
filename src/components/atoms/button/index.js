import PropTypes from 'prop-types'
import React from 'react'
import Link from 'next/link'

import styles from './styles.css'

const button = props => (
  <button onClick={props.click} className={styles.button}>
    {props.label}
  </button>
)

button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  link: PropTypes.string,
}

button.defaultProps = {
  onClick: null,
  link: '',
}

export default button
