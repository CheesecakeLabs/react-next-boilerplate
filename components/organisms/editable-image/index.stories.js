import React from 'react'
import { storiesOf } from '@storybook/react'
import { createClient } from 'fetches'
import { Provider } from 'react-fetches'

import EditableImage from '_components/organisms/editable-image'

const client = createClient(process.env.IMAGE_UPLOAD_ENDPOINT, {
  uri: { removeTrailingSlash: true },
})

storiesOf('Organisms/Update avatar', module)
  .add('from camera or computer', () => (
    <Provider client={client}>
      <EditableImage />
    </Provider>
  ))
  .add('from computer', () => (
    <Provider client={client}>
      <EditableImage userMediaEnabled={false} />
    </Provider>
  ))
  .add('with crop', () => (
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
  .add('accepted just png', () => (
    <Provider client={client}>
      <EditableImage acceptedImgExtensions={['.png']} />
    </Provider>
  ))
  .add('without preview', () => (
    <Provider client={client}>
      <EditableImage withPreview={false} />
    </Provider>
  ))
