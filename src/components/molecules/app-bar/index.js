import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Logo from '_atoms/logo'
import IconButton from '_atoms/icon-button'
import menu from '_images/menu.png'

import styles from './styles.css'

const AppBar = ({ onMenuClick, className }) => (
  <header className={classNames(styles.appBar, className)}>
    <IconButton iconURL={menu} onClick={onMenuClick} />
    <Logo />
  </header>
)

AppBar.propTypes = {
  onMenuClick: PropTypes.func,
  className: PropTypes.string,
}

AppBar.defaultProps = {
  onMenuClick: () => {},
  className: undefined,
}

export default AppBar
