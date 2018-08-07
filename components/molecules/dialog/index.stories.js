import React from 'react'
import { storiesOf } from '@storybook/react'

import Dialog from '_components/molecules/dialog'

storiesOf('Molecules/Dialog', module).add('Dialog', () => (
  <Dialog isOpen title="This is the title">
    {<p>This is the dialog body</p>}
  </Dialog>
))
