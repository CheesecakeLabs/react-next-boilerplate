import PropTypes from 'prop-types'
import React from 'react'

import styles from './styles.css'

const ButtonSignin = ({ label }) => <button className={styles.button}>{label}</button>

ButtonSignin.propTypes = {
  label: PropTypes.string.isRequired,
}

export default ButtonSignin
