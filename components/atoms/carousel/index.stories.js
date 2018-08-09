import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs/react'

import Carousel from '_components/atoms/carousel'

storiesOf('Atoms/carrousel', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo({ text: '' })(() => (
      <Carousel
        images={[
          {
            url:
              'https://boygeniusreport.files.wordpress.com/2017/07/1500295159151.jpg?quality:=98&strip=all&w=782',
            alt: 'Elon Musk',
            legend: 'Elon Musk',
          },
          {
            url:
              'https://boygeniusreport.files.wordpress.com/2017/07/1500295159151.jpg?quality:=98&strip=all&w=782',
            alt: 'Elon Musk',
            legend: 'Elon Musk',
          },
          {
            url:
              'https://boygeniusreport.files.wordpress.com/2017/07/1500295159151.jpg?quality:=98&strip=all&w=782',
            alt: 'Elon Musk',
            legend: 'Elon Musk',
          },
          {
            url:
              'https://boygeniusreport.files.wordpress.com/2017/07/1500295159151.jpg?quality:=98&strip=all&w=782',
            alt: 'Elon Musk',
            legend: 'Elon Musk',
          },
          {
            url:
              'https://boygeniusreport.files.wordpress.com/2017/07/1500295159151.jpg?quality:=98&strip=all&w=782',
            alt: 'mozao da patty',
            legend: 'Elon Musk',
          },
        ]}
      />
    ))
  )
