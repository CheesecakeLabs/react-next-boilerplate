import React, { Component } from 'react'
import PropTypes from 'prop-types'

import AppBar from '_molecules/app-bar'
import Drawer from '_organisms/drawer'

class VerticalNav extends Component {
  static propTypes = {
    navFooterIcon: PropTypes.string,
    navFooterText: PropTypes.string,
    children: PropTypes.node.isRequired,
  }

  static defaultProps = {
    navFooterIcon: undefined,
    navFooterText: undefined,
  }

  state = {
    sidenavIsOpen: false,
  }

  sideMenuHandler = () => {
    this.setState(prevState => ({
      sidenavIsOpen: !prevState.sidenavIsOpen,
    }))
  }

  render() {
    const { navFooterIcon, navFooterText, children } = this.props
    const { sidenavIsOpen } = this.state
    return (
      <div>
        <AppBar onMenuClick={this.sideMenuHandler} />
        <Drawer
          onToggleClick={this.sideMenuHandler}
          isOpen={sidenavIsOpen}
          footerIcon={navFooterIcon}
          footerText={navFooterText}
        >
          {children}
        </Drawer>
      </div>
    )
  }
}

export default VerticalNav
