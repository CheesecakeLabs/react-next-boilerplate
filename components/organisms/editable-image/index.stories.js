import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs/react'
import { createClient } from 'fetches'
import { Provider } from 'react-fetches'

import EditableImage from '_components/organisms/editable-image'

const client = createClient(process.env.IMAGE_UPLOAD_ENDPOINT, {
  uri: { removeTrailingSlash: true },
})

storiesOf('Organisms/Update avatar', module)
  .addDecorator(withKnobs)
  .add(
    'from camera or computer',
    withInfo({
      text: '',
      propTables: [EditableImage],
    })(() => (
      <Provider client={client}>
        <EditableImage />
      </Provider>
    ))
  )
  .add(
    'from computer',
    withInfo({})(() => (
      <Provider client={client}>
        <EditableImage userMediaEnabled={false} />
      </Provider>
    ))
  )
  .add(
    'with crop',
    withInfo({})(() => (
      <Provider client={client}>
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
      </Provider>
    ))
  )
  .add(
    'accepted just png',
    withInfo({})(() => (
      <Provider client={client}>
        <EditableImage acceptedImgExtensions={['.png']} />
      </Provider>
    ))
  )
  .add(
    'without preview',
    withInfo({})(() => (
      <Provider client={client}>
        <EditableImage withPreview={false} />
      </Provider>
    ))
  )
