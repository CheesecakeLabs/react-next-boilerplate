import React, { Fragment } from 'react'
import Router from 'next/router'
import Cookie from 'js-cookie'

import logo from '_storybook/assets/icons/logo.png'

import Button from '../../components/atoms/button'
import { signOut } from '../../utils/SignOut'

import styles from './styles.css'

const CKLBoilerplate = () => (
  <Fragment>
    <div className={styles.buttons}>
      <Button
        label="Private view"
        click={() =>
          Cookie.get('token') ? Router.push('/privatesection') : Router.push('/signin')
        }
      />
      {Cookie.get('token') ? (
        <Button label="Sign off" click={signOut} />
      ) : (
        <div>
          <Button label="Sign up" click={() => Router.push('/signup')} />
          <Button label="Sign in" click={() => Router.push('/signin')} />
        </div>
      )}
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
