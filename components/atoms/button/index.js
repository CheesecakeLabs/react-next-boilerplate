import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// import Icon from '_components/atoms/icon'

import styles from './styles.css'

const Button = ({ onClick, isDisabled, className, children }) => (
  <button
    className={classNames(styles.button, className, { [styles.disabled]: isDisabled })}
    onClick={isDisabled ? undefined : onClick}
    disabled={isDisabled}
  >
    <p className={styles.buttonText}>{children}</p>
  </button>
)

Button.propTypes = {
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Button.defaultProps = {
  isDisabled: false,
  className: undefined,
  onClick: () => {},
}
export default Button