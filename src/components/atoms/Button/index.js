import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import Icon from '_atoms/icon'

import styles from './styles.css'

const Button = ({ onClick, iconURL, className, children }) => (
  <button className={classNames(styles.button, className)} onClick={onClick}>
    {iconURL && <Icon src={iconURL} text="button icon" />}
    <p className={styles.buttonText}>{children}</p>
  </button>
)

Button.propTypes = {
  onClick: PropTypes.func,
  iconURL: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Button.defaultProps = {
  iconURL: undefined,
  className: undefined,
  onClick: () => {},
}
export default Button
