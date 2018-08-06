/* eslint-disable react/button-has-type */
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.css'

const Button = ({ type, onClick, disabled, className, children }) => (
  <button
    type={type}
    className={classNames(styles.button, className, { [styles.disabled]: disabled })}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
)

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Button.defaultProps = {
  type: 'button',
  disabled: false,
  className: undefined,
  onClick: () => {},
}
export default Button
