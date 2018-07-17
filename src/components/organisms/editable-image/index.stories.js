import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import EditableImage from '_organisms/editable-image'

storiesOf('Organisms/Update avatar', module)
  .add('default', () => <EditableImage />)
  .add('with crop', () => <EditableImage withCrop />)
