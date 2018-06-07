import PropTypes from 'prop-types'
import React from 'react'

import styles from './styles.css'

const buttonSignin = props => <button className={styles.button}>{props.label}</button>

buttonSignin.propTypes = {
  label: PropTypes.string.isRequired,
}

export default buttonSignin
