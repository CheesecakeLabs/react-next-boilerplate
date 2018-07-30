import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import NavigationItems from '_components/molecules/navigation-items'
import NavigationItem from '_components/atoms/navigation-item'
import VerticalNav from '_components/organisms/vertical-nav'
import settingsIcon from '_components/assets/icons/settings.png'
import cklLogo from '_components/assets/icons/ckl-logo.png'

storiesOf('Organisms/VerticalNav', module).add('VerticalNav', () => (
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
))
