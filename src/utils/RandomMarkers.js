import { CustomIconMarker } from '../components/atoms/CustomIconMarker'

import { isBrowser, Icon } from './LeafletElements'

const markers = [
  {
    key: 'marker1',
    position: [51.5, -0.1],
    icon: isBrowser ? new Icon.Default() : CustomIconMarker(),
  },
  {
    key: 'marker2',
    position: [51.51, -0.1],
    title: 'My second popup',
    icon: CustomIconMarker(),
  },
  {
    key: 'marker3',
    position: [51.49, -0.05],
    title: 'My third popup',
    icon: CustomIconMarker(),
  },
]

export const RandomMarkers = () => {
  if (isBrowser) {
    return markers
  }
  return []
}
