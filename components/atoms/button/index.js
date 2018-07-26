import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Icon from '_components/atoms/icon'

import styles from './styles.css'

const Button = ({ onClick, iconURL, isDisabled, className, children }) => (
  <button
    className={classNames(styles.button, className, { [styles.disabled]: isDisabled })}
    onClick={isDisabled ? undefined : onClick}
    disabled={isDisabled}
  >
    {iconURL && <Icon src={iconURL} text="button icon" />}
    <p className={styles.buttonText}>{children}</p>
  </button>
)

Button.propTypes = {
  onClick: PropTypes.func,
  iconURL: PropTypes.string,
  isDisabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Button.defaultProps = {
  iconURL: undefined,
  isDisabled: false,
  className: undefined,
  onClick: () => {},
}
export default Button
