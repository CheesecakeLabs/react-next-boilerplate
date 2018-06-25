import React, { Fragment } from 'react'

import logo from '_images/logo.png'

import LeafletWrapper from '../../components/organisms/LeafletMap'

import styles from './styles.css'

const CKLBoilerplate = () => (
  <Fragment>
    <div className={styles.logoContainer}>
      <img src={logo} alt="CheesecakeLabs logo" className={styles.logo} />
    </div>
    <hr />
    <marquee className={styles.text}>React Boilerplate</marquee>
    <hr />
    <LeafletWrapper lat={51.505} lng={-0.09} zoom={13} />
  </Fragment>
)

export default CKLBoilerplate
