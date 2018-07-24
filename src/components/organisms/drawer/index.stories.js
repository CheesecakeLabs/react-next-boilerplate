import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Drawer from '_organisms/drawer'

storiesOf('Organisms/Drawer', module).add('Drawer', () => (
  <Drawer onCloseClick={this.sideMenuHandler} isOpen />
))
