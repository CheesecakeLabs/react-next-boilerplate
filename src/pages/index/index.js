import React, { Fragment } from 'react'

import Button from '_components/atoms/button'
import logo from '_components/assets/icons/logo.png'
import settingsIcon from '_images/settings.png'
import VerticalNav from '_organisms/vertical-nav'
import NavigationItems from '_molecules/navigation-items'
import NavigationItem from '_atoms/navigation-item'
import cklLogo from '_images/ckl-logo.png'

import styles from './styles.css'

const CKLBoilerplate = () => (
  <Fragment>
    <div className={styles.logoContainer}>
      <img src={logo} alt="CheesecakeLabs logo" className={styles.logo} />
    </div>
    <hr />
    {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
    <marquee className={styles.text}>React Boilerplate</marquee>
    <hr />

    <VerticalNav navFooterIcon={cklLogo} navFooterText="2018 Todos os direitos reservados">
      <NavigationItems>
        <NavigationItem link="teste" iconSrc={settingsIcon}>
          Menu 1
        </NavigationItem>
        <NavigationItem link="teste" iconSrc={settingsIcon}>
          Menu 2
        </NavigationItem>
        <NavigationItem link="teste" iconSrc={settingsIcon}>
          Menu 3
        </NavigationItem>
        <NavigationItem link="teste" iconSrc={settingsIcon}>
          Menu 4
        </NavigationItem>
        <NavigationItem link="teste" iconSrc={settingsIcon}>
          Menu 5
        </NavigationItem>
      </NavigationItems>
    </VerticalNav>
  </Fragment>
)

export default CKLBoilerplate
