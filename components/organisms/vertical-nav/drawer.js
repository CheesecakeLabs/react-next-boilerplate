import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import IconButton from '_components/atoms/icon-button'
import menuIcon from '_components/assets/icons/menu.png'
import closeIcon from '_components/assets/icons/close.png'

import styles from './styles.css'

const Drawer = ({ isOpen, onToggleClick, children, className }) => {
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
      </nav>
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
