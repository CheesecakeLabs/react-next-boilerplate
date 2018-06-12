import PropTypes from 'prop-types'
import React from 'react'

import styles from './styles.css'

const ButtonSignin = props => <button className={styles.button}>{props.label}</button>

ButtonSignin.propTypes = {
  label: PropTypes.string.isRequired,
}

export default ButtonSignin
