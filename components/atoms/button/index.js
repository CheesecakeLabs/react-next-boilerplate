import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Icon from '_components/atoms/icon'

import styles from './styles.css'

const Button = ({ onClick, iconURL, className, children, isBlock }) => (
  <button
    className={classNames(styles.button, className, { [styles.block]: isBlock })}
    onClick={onClick}
  >
    {iconURL && <Icon src={iconURL} text="button icon" />}
    <p className={styles.buttonText}>{children}</p>
  </button>
)

Button.propTypes = {
  onClick: PropTypes.func,
  iconURL: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  isBlock: PropTypes.bool,
}

Button.defaultProps = {
  iconURL: undefined,
  className: undefined,
  onClick: () => {},
  isBlock: false,
}
export default Button
