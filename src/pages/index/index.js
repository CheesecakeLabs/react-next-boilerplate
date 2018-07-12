import React, { Fragment } from 'react'

import logo from '_images/logo.png'
import EditableImage from '_organisms/editable-image'

import styles from './styles.css'

const CKLBoilerplate = () => (
  <Fragment>
    <div className={styles.logoContainer}>
      <img src={logo} alt="CheesecakeLabs logo" className={styles.logo} />
    </div>
    <hr />
    {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
    <marquee className={styles.text}>React Boilerplate</marquee>
    <hr />

    <EditableImage />
  </Fragment>
)

export default CKLBoilerplate
