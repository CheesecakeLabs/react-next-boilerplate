import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import EditableImage from '_organisms/editable-image'

storiesOf('Update avatar', module).add('default', () => <EditableImage />)
