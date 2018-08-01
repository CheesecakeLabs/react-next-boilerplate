import React from 'react'
import { storiesOf } from '@storybook/react'

import Accordion from './index'

storiesOf('Accordion', module).add('Accordion', () => (
  <Accordion>
    <Accordion.Section sectionTitle="Lorem ipsum">
      Morbi euismod consectetur est, eget vestibulum enim egestas vel. Maecenas ut tortor at massa
      tincidunt bibendum et vitae diam. Mauris malesuada lorem metus, vitae sollicitudin turpis
      semper at.
    </Accordion.Section>
    <Accordion.Section sectionTitle="Lorem ipsum">
      Morbi euismod consectetur est, eget vestibulum enim egestas vel. Maecenas ut tortor at massa
      tincidunt bibendum et vitae diam. Mauris malesuada lorem metus, vitae sollicitudin turpis
      semper at.
    </Accordion.Section>
    <Accordion.Section sectionTitle="Lorem ipsum">
      Morbi euismod consectetur est, eget vestibulum enim egestas vel. Maecenas ut tortor at massa
      tincidunt bibendum et vitae diam. Mauris malesuada lorem metus, vitae sollicitudin turpis
      semper at.
    </Accordion.Section>
  </Accordion>
))
