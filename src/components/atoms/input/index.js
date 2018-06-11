import PropTypes from 'prop-types'
import React from 'react'

import styles from './styles.css'

const input = ({ type, onChange, value }) => (
  <input className={styles.input} type={type} onChange={onChange} value={value} />
)

input.propTypes = {
  type: PropTypes.string.isRequired,
}

export default input
