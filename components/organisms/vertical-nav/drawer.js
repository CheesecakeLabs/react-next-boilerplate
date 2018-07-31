import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import IconButton from '_components/atoms/icon-button'
import Icon from '_components/atoms/icon'
import menuIcon from '_components/assets/icons/menu.png'
import closeIcon from '_components/assets/icons/close.png'

import NavFooter from './footer'
import styles from './styles.css'

const Drawer = ({ isOpen, onToggleClick, children, footerIcon, footerText, className }) => {
  const headerIcon = iconURL => (
    <IconButton iconURL={iconURL} className={styles.iconButton} onClick={onToggleClick} />
  )

  return (
    <div
      className={classNames(
        styles.sidenav,
        className,
        { [styles.opened]: isOpen },
        { [styles.closed]: !isOpen }
      )}
    >
      <nav>
        <div className={styles.navHeaderMobileOnly}>{headerIcon(closeIcon)}</div>
        <div className={styles.navHeaderDesktopOnly}>{headerIcon(menuIcon)}</div>
        {children}
        <NavFooter className={styles.navFooter}>{footerText}</NavFooter>
        <NavFooter className={styles.navFooterClosedOnDesktop}>
          <Icon src={footerIcon} />
        </NavFooter>
      </nav>
    </div>
  )
}

Drawer.propTypes = {
  isOpen: PropTypes.bool,
  onToggleClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  footerIcon: PropTypes.string,
  footerText: PropTypes.string,
  className: PropTypes.string,
}

Drawer.defaultProps = {
  isOpen: false,
  onToggleClick: undefined,
  footerIcon: undefined,
  footerText: undefined,
  className: undefined,
}

export default Drawer
