import React, { Fragment } from 'react'
import Link from 'next/link'

import logo from '_images/logo.png'

import Button from '../../components/atoms/button'

import styles from './styles.css'

const CKLBoilerplate = () => (
  <Fragment>
    <div className={styles.buttons}>
      <Link href="/signup">
        <Button label="Sign up" link="/signup" />
      </Link>

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
