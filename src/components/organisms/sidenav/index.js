import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import NavigationItems from '_molecules/navigation-items'
import NavigationItem from '_atoms/navigation-item'
import IconButton from '_atoms/icon-button'
import closeIcon from '_images/close.svg'

import styles from './styles.css'

const Sidenav = ({ isOpen, onCloseClick }) => (
  <div
    className={classNames(
      styles.sidenav,
      { [styles.opened]: isOpen },
      { [styles.closed]: !isOpen }
    )}
  >
    <nav>
      <div className={styles.closeNavWrapper}>
        <IconButton
          iconURL={closeIcon}
          className={styles.iconButton}
          classNameIcon={styles.icon}
          onClick={onCloseClick}
        />
      </div>
      <NavigationItems>
        <NavigationItem link="teste">Resumo</NavigationItem>
        <NavigationItem link="teste">Relatório de vendas</NavigationItem>
        <NavigationItem link="teste">Relatótio de recebíveis</NavigationItem>
        <NavigationItem link="teste">Configurações</NavigationItem>
        <NavigationItem link="teste">Sair</NavigationItem>
      </NavigationItems>
    </nav>
  </div>
)

Sidenav.propTypes = {
  isOpen: PropTypes.bool,
  onCloseClick: PropTypes.func,
}

Sidenav.defaultProps = {
  isOpen: false,
  onCloseClick: undefined,
}

export default Sidenav
