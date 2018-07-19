import React from 'react'

import NavigationItems from '_molecules/navigation-items'
import NavigationItem from '_atoms/navigation-item'

import styles from './styles.css'

const Sidenav = () => (
  <div className={styles.sidenav}>
    <nav>
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
