import markerIcon from '../../../images/marker-icon.png'
import { isBrowser, Icon } from '../../../utils/LeafletElements'

export const CustomIconMarker = () => {
  if (isBrowser) {
    return new Icon({
      iconUrl: markerIcon,
      iconSize: [35, 37],
    })
  }
  return null
}
