import PropTypes from 'prop-types'
import React from 'react'

import styles from './styles.css'

const input = props => <input className={styles.input} type={props.type} />

input.propTypes = {
  type: PropTypes.string.isRequired,
}

export default input
