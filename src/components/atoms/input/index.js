import PropTypes from 'prop-types'
import React from 'react'

import styles from './styles.css'

const Input = ({ type, onChange, value }) => (
  <input className={styles.input} type={type} onChange={onChange} value={value} />
)

Input.propTypes = {
  type: PropTypes.string.isRequired,
}

export default Input
