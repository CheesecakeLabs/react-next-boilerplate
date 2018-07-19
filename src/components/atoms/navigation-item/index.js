import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const NavigationItem = ({ link, children }) => (
  <li className={styles.navItem}>
    <a className={styles.link} href={link}>
      {children}
    </a>
  </li>
)

NavigationItem.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default NavigationItem
