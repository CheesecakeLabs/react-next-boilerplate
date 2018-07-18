import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Dialog from '_molecules/dialog'

storiesOf('Molecules/Dialog', module).add('Dialog', () => (
  <Dialog isOpen title="This is the title">
    {<p>This is the dialog body</p>}
  </Dialog>
))
