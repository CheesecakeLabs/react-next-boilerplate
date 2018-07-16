import React from 'react'
import PropTypes from 'prop-types'

import Icon from '_atoms/icon'

import styles from './styles.css'

const Button = ({ onClick, iconURL, children }) => (
  <button className={styles.button} onClick={onClick}>
    {iconURL && <Icon src={iconURL} text="button icon" />}
    <p className={styles.buttonText}>{children}</p>
  </button>
)

Button.propTypes = {
  onClick: PropTypes.func,
  iconURL: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Button.defaultProps = {
  iconURL: undefined,
  onClick: () => {},
}
export default Button
