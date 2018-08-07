import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import styles from './styles.css'

const Button = ({ onClick, className, disabled, children }) => (
  <button
    className={classNames(styles.button, className)}
    onClick={onClick}
    disabled={disabled}
    type="button"
  >
    {children}
  </button>
)

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Button.defaultProps = {
  disabled: false,
  className: undefined,
}

export default Button
