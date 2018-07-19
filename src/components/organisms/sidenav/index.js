import React from 'react'

import NavigationItems from '_molecules/navigation-items'
import NavigationItem from '_atoms/navigation-item'
import IconButton from '_atoms/icon-button'
import closeIcon from '_images/close.svg'

import styles from './styles.css'

const Sidenav = () => (
  <div className={styles.sidenav}>
    <nav>
      <div className={styles.closeNavWrapper}>
        <IconButton
          iconURL={closeIcon}
          className={styles.iconButton}
          classNameIcon={styles.icon}
          onClick={() => {
            console.log('close side nav')
          }}
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

export default Sidenav
