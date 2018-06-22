import React, { Fragment } from 'react'

import logo from '_components/assets/icons/logo.png'

import LeafletWrapper from '../../components/organisms/LeafletMap'

import styles from './styles.css'

import Button from '_components/atoms/button'

const CKLBoilerplate = () => (
  <Fragment>
    <div className={styles.logoContainer}>
      <img src={logo} alt="CheesecakeLabs logo" className={styles.logo} />
    </div>
    <hr />
    <marquee className={styles.text}>React Boilerplate</marquee>
    <hr />

    <LeafletWrapper />
  </Fragment>
)

export default CKLBoilerplate
