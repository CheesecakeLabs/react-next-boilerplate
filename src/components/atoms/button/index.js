import PropTypes from 'prop-types'
import React from 'react'

import styles from './styles.css'

const button = props => <button className={styles.button}>{props.label}</button>

button.propTypes = {
  label: PropTypes.string.isRequired,
}

export default button
