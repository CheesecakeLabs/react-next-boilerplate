import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ErrorMessage from '_atoms/error-message'

storiesOf('Atoms/ErrorMessage', module).add('Error Message', () => (
  <ErrorMessage>This is an error message</ErrorMessage>
))
