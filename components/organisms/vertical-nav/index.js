import React, { Component } from 'react'
import PropTypes from 'prop-types'

import AppBar from '_components/molecules/app-bar'
import Drawer from '_components/organisms/drawer'

class VerticalNav extends Component {
  static propTypes = {
    navFooterIcon: PropTypes.string,
    navFooterText: PropTypes.string,
    appBarClass: PropTypes.string,
    drawerClass: PropTypes.string,
    children: PropTypes.node.isRequired,
  }

  static defaultProps = {
    navFooterIcon: undefined,
    navFooterText: undefined,
    appBarClass: undefined,
    drawerClass: undefined,
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
    const { navFooterIcon, navFooterText, appBarClass, drawerClass, children } = this.props
    const { sidenavIsOpen } = this.state
    return (
      <div>
        <AppBar onMenuClick={this.sideMenuHandler} className={appBarClass} />
        <Drawer
          onToggleClick={this.sideMenuHandler}
          isOpen={sidenavIsOpen}
          footerIcon={navFooterIcon}
          footerText={navFooterText}
          className={drawerClass}
        >
          {children}
        </Drawer>
      </div>
    )
  }
}

export default VerticalNav
