import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs/react'

import VerticalNav from '_components/organisms/vertical-nav'
import settingsIcon from '_components/assets/icons/settings.png'
import cklLogo from '_components/assets/icons/ckl-logo.png'
import Icon from '_components/atoms/icon'

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

        <VerticalNav.Footer hasCoolapseContent collapseContent={<Icon src={cklLogo} />}>
          <p>Todos os direitos reservados</p>
        </VerticalNav.Footer>
      </VerticalNav>
    ))
  )
