import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import menuIcon from '_components/assets/icons/menu.png'
import closeIcon from '_components/assets/icons/close.png'
import Button from '_components/atoms/button'

import styles from './styles.css'

const Drawer = ({ isOpen, onToggleClick, children, className }) => {
  const headerIcon = iconURL => (
    <Button onClick={onToggleClick} className={styles.iconButton}>
      <Button.Icon src={iconURL} alt="toggle menu" className={styles.iconStyle} />
    </Button>
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
      <div className={styles.navHeaderMobileOnly}>{headerIcon(closeIcon)}</div>
      <div className={styles.navHeaderDesktopOnly}>{headerIcon(menuIcon)}</div>
      <nav>{children}</nav>
    </div>
  )
}

Drawer.propTypes = {
  isOpen: PropTypes.bool,
  onToggleClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Drawer.defaultProps = {
  isOpen: false,
  onToggleClick: undefined,
  className: undefined,
}

export default Drawer
