import React, { Fragment } from 'react'
import Link from 'next/link'

import logo from '_images/logo.png'

import styles from './styles.css'

const CKLBoilerplate = () => (
  <Fragment>
    <div className={styles.buttons}>
      <button>Sign up</button>
      <Link href="/signin">
        <button>Sign in</button>
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
