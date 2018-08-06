import React, { Fragment } from 'react'

import Button from '_components/atoms/button'
import logo from '_components/assets/icons/logo.png'

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
    <Button>TESTEE</Button>
  </Fragment>
)

export default CKLBoilerplate
