import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import Icon from '_atoms/icon'
import Button from '_atoms/button'

import styles from './styles.css'

const IconButton = ({ className, iconClassName, onClick, icon, alt }) => (
  <Button className={classNames(styles.button, className)} onClick={onClick}>
    <Icon className={classNames(styles.icon, iconClassName)} icon={icon} alt={alt} />
  </Button>
)

IconButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
  iconClassName: PropTypes.string,
  alt: PropTypes.string.isRequired,
}

IconButton.defaultProps = {
  className: undefined,
  iconClassName: undefined,
}

export default IconButton
