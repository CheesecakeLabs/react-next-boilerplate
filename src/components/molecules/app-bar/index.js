import React from 'react'
import PropTypes from 'prop-types'

import Logo from '_atoms/logo'
import IconButton from '_atoms/icon-button'
import menu from '_images/menu.png'

import styles from './styles.css'

const AppBar = ({ onMenuClick }) => (
  <header className={styles.appBar}>
    <IconButton iconURL={menu} onClick={onMenuClick} />
    <Logo />
  </header>
)

AppBar.propTypes = {
  onMenuClick: PropTypes.func,
}

AppBar.defaultProps = {
  onMenuClick: () => {},
}

export default AppBar
