import React from 'react'
import PropTypes from 'prop-types'

import Logo from '_atoms/logo'
import IconButton from '_atoms/icon-button'
import menu from '_images/menu.svg'

import styles from './styles.css'

const Header = ({ onMenuClick }) => (
  <header className={styles.header}>
    <IconButton iconURL={menu} onClick={onMenuClick} />
    <Logo />
  </header>
)

Header.propTypes = {
  onMenuClick: PropTypes.func,
}

Header.defaultProps = {
  onMenuClick: () => {},
}

export default Header
