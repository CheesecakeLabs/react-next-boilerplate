import React from 'react'
import PropTypes from 'prop-types'

import Icon from '_atoms/icon'

import styles from './styles.css'

const NavigationItem = ({ icon, link, style, children }) => (
  <li className={styles.navItem}>
    <a className={styles.link} href={link}>
      <Icon className={styles.icon} src={icon} />
      <span className={style}>{children}</span>
    </a>
  </li>
)

NavigationItem.propTypes = {
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  style: PropTypes.string,
}

NavigationItem.defaultProps = {
  icon: undefined,
  style: undefined,
}

export default NavigationItem
