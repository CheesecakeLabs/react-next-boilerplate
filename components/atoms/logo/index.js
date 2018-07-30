import React from 'react'

import logo from '_components/assets/icons/ckl-logo.png'

import styles from './styles.css'

const Logo = () => (
  <div className={styles.brand}>
    <img className={styles.brandImage} src={logo} alt="company logo" />
  </div>
)

export default Logo
