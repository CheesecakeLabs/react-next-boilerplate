import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Logo from '_components/atoms/logo'
import IconButton from '_components/atoms/icon-button'
import menu from '_components/assets/icons/menu.png'

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
