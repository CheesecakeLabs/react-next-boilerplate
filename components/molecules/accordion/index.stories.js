import React from 'react'
import { storiesOf } from '@storybook/react'
import Section from '_components/atoms/accordion-section'

import Accordion from './index'

storiesOf('Accordion', module).add('Accordion', () => (
  <Accordion>
    <Section sectionTitle="Neymar"> O ousado chegou.</Section>
    <Section sectionTitle="Elon Muskeira">
      Tesla 4better worldTesla 4better worldTesla 4better worldTesla 4better worldTesla 4better
      worldTesla 4better world world world world world world world world world world world world
      world world world world world
    </Section>
  </Accordion>
))
