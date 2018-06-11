import PropTypes from 'prop-types'
import React from 'react'

import styles from './styles.css'

const label = ({ htmlFor, label }) => (
  <label htmlFor={htmlFor} className={styles.label}>
    {label}
  </label>
)

label.propTypes = {
  label: PropTypes.string.isRequired,
  htmlFor: PropTypes.string,
}

export default label
