import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import NavigationItems from '_molecules/navigation-items'
import NavigationItem from '_atoms/navigation-item'
import VerticalNav from '_organisms/vertical-nav'
import settingsIcon from '_images/settings.png'
import cklLogo from '_images/ckl-logo.png'

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
