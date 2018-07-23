import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import NavigationItems from '_molecules/navigation-items'
import NavigationItem from '_atoms/navigation-item'
import NavigationFooter from '_atoms/navigation-footer'
import IconButton from '_atoms/icon-button'
import Icon from '_atoms/icon'
import closeIcon from '_images/close.svg'
import menuIcon from '_images/menu.svg'
import cklLogo from '_images/ckl-logo.png'
import settingsIcon from '_images/settings.png'

import styles from './styles.css'

const Sidenav = ({ isOpen, onCloseClick }) => {
  const headerIcon = iconURL => (
    <IconButton
      iconURL={iconURL}
      className={styles.iconButton}
      classNameIcon={styles.icon}
      onClick={onCloseClick}
    />
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
          <NavigationItem link="teste" icon={settingsIcon} style={styles.menuItemStyle}>
            Menu 1
          </NavigationItem>
          <NavigationItem link="teste" icon={settingsIcon} style={styles.menuItemStyle}>
            Menu 2
          </NavigationItem>
          <NavigationItem link="teste" icon={settingsIcon} style={styles.menuItemStyle}>
            Menu 3
          </NavigationItem>
          <NavigationItem link="teste" icon={settingsIcon} style={styles.menuItemStyle}>
            Menu 4
          </NavigationItem>
          <NavigationItem link="teste" icon={settingsIcon} style={styles.menuItemStyle}>
            Menu 5
          </NavigationItem>
        </NavigationItems>

        <NavigationFooter className={styles.navFooter}>
          2018 Todos os direitos reservados
        </NavigationFooter>
        <NavigationFooter className={styles.navFooterForCloseDesktopOnly}>
          <Icon src={cklLogo} />
        </NavigationFooter>
      </nav>
    </div>
  )
}

Sidenav.propTypes = {
  isOpen: PropTypes.bool,
  onCloseClick: PropTypes.func,
}

Sidenav.defaultProps = {
  isOpen: false,
  onCloseClick: undefined,
}

export default Sidenav
