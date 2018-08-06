import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Button from '_components/atoms/button'
import Logo from '_components/atoms/logo'
import menu from '_components/assets/icons/menu.png'

import styles from './styles.css'

const AppBar = ({ onMenuClick, className }) => (
  <header className={classNames(styles.appBar, className)}>
    <Button onClick={onMenuClick} className={styles.iconWidth}>
      <Button.Icon src={menu} />
    </Button>
    <Logo />
  </header>
)

AppBar.propTypes = {
  onMenuClick: PropTypes.func,
  className: PropTypes.string,
}

AppBar.defaultProps = {
  onMenuClick: () => {},
  className: undefined,
}

export default AppBar
