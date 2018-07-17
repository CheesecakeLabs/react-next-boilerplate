import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import EditableImage from '_organisms/editable-image'

storiesOf('Organisms/Update avatar', module)
  .add('from camera or computer', () => <EditableImage />)
  .add('from computer', () => <EditableImage userMediaEnabled={false} />)
  .add('with crop', () => (
    <EditableImage
      withCrop
      crop={{
        aspect: 1,
        x: 10,
        y: 10,
        width: 80,
        height: 80,
      }}
    />
  ))
  .add('accepted just png', () => <EditableImage acceptedImgExtensions={['.png']} />)
  .add('without preview', () => <EditableImage withPreview={false} />)
