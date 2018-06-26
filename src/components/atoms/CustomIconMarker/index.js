import markerIcon from '../../../images/icon.png'
import { isBrowser, Icon } from '../../../utils/LeafletElements'

export const CustomIconMarker = () => {
  if (isBrowser) {
    return new Icon({
      iconUrl: markerIcon,
      iconSize: [38, 46],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
      shadowUrl: markerIcon,
      shadowSize: [68, 46],
      shadowAnchor: [22, 94],
    })
  }
  return null
}
