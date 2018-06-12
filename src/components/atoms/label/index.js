import PropTypes from 'prop-types'
import React from 'react'

import styles from './styles.css'

const Label = ({ htmlFor, label }) => (
  <label htmlFor={htmlFor} className={styles.label}>
    {label}
  </label>
)

Label.propTypes = {
  label: PropTypes.string.isRequired,
  htmlFor: PropTypes.string,
}

export default Label
