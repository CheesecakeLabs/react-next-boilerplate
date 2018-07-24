import React, { Component } from 'react'

import AppBar from '_molecules/app-bar'
import Drawer from '_organisms/drawer'

class VerticalNav extends Component {
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
        <AppBar onMenuClick={this.sideMenuHandler} />
        <Drawer onToggleClick={this.sideMenuHandler} isOpen={sidenavIsOpen} />
      </div>
    )
  }
}

export default VerticalNav
