import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs/react'

import VerticalNav from '_components/organisms/vertical-nav'
import settingsIcon from '_storybook/assets/icons/settings.png'
import cklLogo from '_storybook/assets/icons/ckl-logo.png'

storiesOf('Organisms/VerticalNav', module)
  .addDecorator(withKnobs)
  .add(
    'vertical nav',
    withInfo({ inline: false })(() => (
      <VerticalNav navFooterIcon={cklLogo} navFooterText="2018 Todos os direitos reservados">
        <VerticalNav.Items>
          <VerticalNav.Item link="teste" iconSrc={settingsIcon}>
            Menu 1
          </VerticalNav.Item>
          <VerticalNav.Item link="teste" iconSrc={settingsIcon}>
            Menu 2
          </VerticalNav.Item>
          <VerticalNav.Item link="teste" iconSrc={settingsIcon}>
            Menu 3
          </VerticalNav.Item>
          <VerticalNav.Item link="teste" iconSrc={settingsIcon}>
            Menu 4
          </VerticalNav.Item>
          <VerticalNav.Item link="teste" iconSrc={settingsIcon}>
            Menu 5
          </VerticalNav.Item>
        </VerticalNav.Items>

        <VerticalNav.Footer hasCoolapseContent collapseIconUrl={cklLogo}>
          <p>Todos os direitos reservados</p>
        </VerticalNav.Footer>
      </VerticalNav>
    ))
  )
