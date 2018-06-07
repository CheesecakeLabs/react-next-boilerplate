import React, { Fragment } from 'react'
import Link from 'next/link'

import logo from '_images/logo.png'

import styles from './styles.css'

import Button from '../../components/atoms/button'

const CKLBoilerplate = () => (
  <Fragment>
    <div className={styles.buttons}>
      <Button label="Sign up" />
      <Link href="/signin">
        <Button label="Sign in" link="/signin" />
      </Link>
    </div>
    <div className={styles.logoContainer}>
      <img src={logo} alt="CheesecakeLabs logo" className={styles.logo} />
    </div>
    <hr />
    <marquee className={styles.text}>React Boilerplate</marquee>
    <hr />
  </Fragment>
)

export default CKLBoilerplate
