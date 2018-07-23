import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Sidenav from '_organisms/sidenav'

storiesOf('Organisms/Sidenav', module).add('Sidenav', () => (
  <Sidenav onCloseClick={this.sideMenuHandler} isOpen />
))
