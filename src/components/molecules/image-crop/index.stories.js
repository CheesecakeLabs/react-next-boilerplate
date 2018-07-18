import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import cklLogo from '_images/ckl-logo.png'
import ImageCrop from '_molecules/image-crop'

storiesOf('Molecules/ImageCrop', module)
  .add('Free aspect', () => <ImageCrop selectedFile={cklLogo} />)
  .add('1:1 aspect', () => (
    <ImageCrop
      selectedFile={cklLogo}
      crop={{
        aspect: 1,
        x: 10,
        y: 10,
        width: 80,
        height: 80,
      }}
    />
  ))
  .add('16:9 aspect', () => (
    <ImageCrop
      selectedFile={cklLogo}
      crop={{
        aspect: 16 / 9,
        x: 10,
        y: 10,
        width: 80,
        height: 80,
      }}
    />
  ))
  .add('circle shape', () => (
    <ImageCrop
      selectedFile={cklLogo}
      crop={{
        aspect: 1,
        x: 10,
        y: 10,
        width: 80,
        height: 80,
      }}
      cropShape="circle"
    />
  ))
