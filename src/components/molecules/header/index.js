import React, { Component } from 'react'

import Logo from '_atoms/logo'
import IconButton from '_atoms/icon-button'
import menu from '_images/menu.svg'

import styles from './styles.css'

class Header extends Component {
  onMenuClick = () => {
    //TODO handler side drawer
  }

  render() {
    return (
      <header className={styles.header}>
        <IconButton iconURL={menu} onClick={this.menuClicked} />
        <Logo />
      </header>
    )
  }
}

export default Header
