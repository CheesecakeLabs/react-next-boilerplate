import PropTypes from 'prop-types'
import React from 'react'

import styles from './styles.css'

const label = props => (
  <label htmlFor={props.htmlFor} className={styles.label}>
    {props.label}
  </label>
)

label.propTypes = {
  label: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
}

export default label
