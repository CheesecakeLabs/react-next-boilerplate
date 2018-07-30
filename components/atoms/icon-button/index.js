import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Icon from '_components/atoms/icon'

import styles from './styles.css'

const IconButton = ({ iconURL, onClick, className, classNameIcon }) => (
  <button className={classNames(className, styles.iconButton)} onClick={onClick}>
    <Icon className={classNameIcon} src={iconURL} />
  </button>
)

Icon.propTypes = {
  iconURL: PropTypes.string.isRequired,
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
