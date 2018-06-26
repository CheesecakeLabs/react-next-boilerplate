export const isBrowser = typeof window !== 'undefined'

const RL = isBrowser ? require('react-leaflet') : undefined
const GL = isBrowser ? require('react-leaflet-google') : undefined
const LT = isBrowser ? require('leaflet') : undefined

export const { Map, TileLayer, Marker, Popup } = RL || {}
export const { GoogleLayer } = GL || {}
export const { Icon } = LT || {}
