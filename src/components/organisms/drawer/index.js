import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import menuIcon from '_images/menu.png'
import closeIcon from '_images/close.png'
import cklLogo from '_images/ckl-logo.png'
import settingsIcon from '_images/settings.png'
import NavigationItems from '_molecules/navigation-items'
import NavigationItem from '_atoms/navigation-item'
import NavigationFooter from '_atoms/navigation-footer'
import IconButton from '_atoms/icon-button'
import Icon from '_atoms/icon'

import styles from './styles.css'

const Drawer = ({ isOpen, onToggleClick }) => {
  const headerIcon = iconURL => (
    <IconButton iconURL={iconURL} className={styles.iconButton} onClick={onToggleClick} />
  )

  return (
    <div
      className={classNames(
        styles.sidenav,
        { [styles.opened]: isOpen },
        { [styles.closed]: !isOpen }
      )}
    >
      <nav>
        <div className={styles.navHeaderMobileOnly}>{headerIcon(closeIcon)}</div>
        <div className={styles.navHeaderDesktopOnly}>{headerIcon(menuIcon)}</div>
        <NavigationItems>
          <NavigationItem link="teste" iconSrc={settingsIcon} className={styles.menuItemStyle}>
            Menu 1
          </NavigationItem>
          <NavigationItem link="teste" iconSrc={settingsIcon} className={styles.menuItemStyle}>
            Menu 2
          </NavigationItem>
          <NavigationItem link="teste" iconSrc={settingsIcon} className={styles.menuItemStyle}>
            Menu 3
          </NavigationItem>
          <NavigationItem link="teste" iconSrc={settingsIcon} className={styles.menuItemStyle}>
            Menu 4
          </NavigationItem>
          <NavigationItem link="teste" iconSrc={settingsIcon} className={styles.menuItemStyle}>
            Menu 5
          </NavigationItem>
        </NavigationItems>
        <NavigationFooter className={styles.navFooter}>
          2018 Todos os direitos reservados
        </NavigationFooter>
        <NavigationFooter className={styles.navFooterClosedOnDesktop}>
          <Icon src={cklLogo} />
        </NavigationFooter>
      </nav>
    </div>
  )
}

Drawer.propTypes = {
  isOpen: PropTypes.bool,
  onToggleClick: PropTypes.func,
}

Drawer.defaultProps = {
  isOpen: false,
  onToggleClick: undefined,
}

export default Drawer
