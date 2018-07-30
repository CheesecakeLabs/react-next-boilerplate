import React, { Fragment } from 'react'

import logo from '_components/assets/icons/logo.png'
import LeafletMap from '_components/organisms/leaflet-map'
import { RandomMarkers } from '_utils/random-markers'

import styles from './styles.css'

const CKLBoilerplate = () => (
  <Fragment>
    <div className={styles.logoContainer}>
      <img src={logo} alt="CheesecakeLabs logo" className={styles.logo} />
    </div>
    <hr />
    <marquee className={styles.text}>React Boilerplate</marquee>
    <hr />
    <LeafletMap lat={51.505} lng={-0.09} zoom={13} markers={RandomMarkers()} />
  </Fragment>
)

export default CKLBoilerplate
