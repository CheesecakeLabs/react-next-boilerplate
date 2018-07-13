import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import Icon from '_atoms/icon'

import styles from './styles.css'

const IconButton = ({ className, iconClassName, onClick, icon }) => (
  <button className={classNames(styles.button, className)} onClick={onClick}>
    <Icon className={classNames(styles.icon, iconClassName)} icon={icon} />
  </button>
)

IconButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
  iconClassName: PropTypes.string,
}

IconButton.defaultProps = {
  className: undefined,
  iconClassName: undefined,
}

export default IconButton
