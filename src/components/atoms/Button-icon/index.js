import React from 'react'
import PropTypes from 'prop-types'

import loginIcon from '_images/login-icon.svg'

import styles from './styles.css'

const ButtonIcon = ({ text }) => <img className={styles.buttonIcon} src={loginIcon} alt={text} />

ButtonIcon.propTypes = {
  text: PropTypes.string,
}

ButtonIcon.defaultProps = {
  text: undefined,
}

export default ButtonIcon
