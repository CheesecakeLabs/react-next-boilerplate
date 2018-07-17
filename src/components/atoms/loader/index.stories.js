import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Loader from '_atoms/loader'

storiesOf('Atoms/Loader', module).add('Loader', () => <Loader />)
