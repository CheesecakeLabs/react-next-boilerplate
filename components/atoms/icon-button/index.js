import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Icon from '_components/atoms/icon'
import Button from '_components/atoms/button'

import styles from './styles.css'

const IconButton = ({ iconURL, iconText, onClick, className, classNameIcon }) => (
  <Button className={classNames(className, styles.iconButton)} onClick={onClick}>
    <Icon className={classNameIcon} src={iconURL} alt={iconText} />
  </Button>
)

Icon.propTypes = {
  iconURL: PropTypes.string.isRequired,
  iconText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  classNameIcon: PropTypes.string,
}

Icon.defaultProps = {
  onClick: () => {},
  className: undefined,
  classNameIcon: undefined,
}

export default IconButton
