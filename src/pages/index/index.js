import React, { Fragment } from 'react'
import Router from 'next/router'

import logo from '_images/logo.png'

import Button from '../../components/atoms/button'
import Cookie from 'js-cookie'
import { signOff } from '../../utils/Signoff'

import styles from './styles.css'

const CKLBoilerplate = () => (
  <Fragment>
    <div className={styles.buttons}>
      <Button label="Sign up" click={() => Router.push('/signup')} />
      <Button label="Sign in" click={() => Router.push('/signin')} />
      {Cookie.get('token') && <Button label="Sign off" click={signOff} />}
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
