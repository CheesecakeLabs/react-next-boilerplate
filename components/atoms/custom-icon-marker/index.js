import { isBrowser, Icon } from '_utils/leaflet-elements'
import markerIcon from '_images/marker-icon.png'

export const CustomIconMarker = () => {
  if (isBrowser) {
    return new Icon({
      iconUrl: markerIcon,
      iconSize: [35, 37],
    })
  }
  return null
}
