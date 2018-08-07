import React from 'react'
import { storiesOf } from '@storybook/react'

import ErrorMessage from '_components/atoms/error-message'

storiesOf('Atoms/ErrorMessage', module).add('Error Message', () => (
  <ErrorMessage>This is an error message</ErrorMessage>
))
