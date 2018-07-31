import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs/react'

import LeafletMap from '_components/organisms/leaflet-map'
import { RandomMarkers } from '_utils/random-markers'

storiesOf('Organisms/Map', module)
  .addDecorator(withKnobs)
  .add(
    'default leaflet map',
    withInfo({ text: '' })(() => <LeafletMap lat={51.505} lng={-0.09} markers={RandomMarkers()} />)
  )
  .add(
    'leaflet map with markers',
    withInfo({ text: '' })(() => <LeafletMap lat={51.505} lng={-0.09} markers={RandomMarkers()} />)
  )
  .add(
    'leaflet map with Google layer',
    withInfo({ text: '' })(() => (
      <LeafletMap lat={51.505} lng={-0.09} markers={RandomMarkers()} hasGoogleLayer />
    ))
  )
  .add(
    'Mapbox map',
    withInfo({ text: '' })(() => (
      <LeafletMap lat={51.505} lng={-0.09} markers={RandomMarkers()} showMapbox />
    ))
  )
  .add(
    'Hide layers control of leaflet map',
    withInfo({ text: '' })(() => (
      <LeafletMap lat={51.505} lng={-0.09} markers={RandomMarkers()} showLayersControls />
    ))
  )
