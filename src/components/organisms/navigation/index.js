import React, { Component } from 'react'

import Header from '_molecules/header'
import Sidenav from '_organisms/sidenav'

class Navigation extends Component {
  state = {
    sidenavIsOpen: false,
  }

  sideMenuHandler = () => {
    this.setState(prevState => ({
      sidenavIsOpen: !prevState.sidenavIsOpen,
    }))
  }

  render() {
    const { sidenavIsOpen } = this.state
    return (
      <div>
        <Header onMenuClick={this.sideMenuHandler} />
        <Sidenav onCloseClick={this.sideMenuHandler} isOpen={sidenavIsOpen} />
      </div>
    )
  }
}

export default Navigation
