import React from 'react'
import PropTypes from 'prop-types'

import Icon from '_atoms/icon'

import styles from './styles.css'

const NavigationItem = ({ icon, link, style, children }) => (
  <li className={styles.navItem}>
    <a className={styles.link} href={link}>
      {icon ? <Icon className={styles.icon} src={icon} /> : undefined}
      <span className={style}>{children}</span>
    </a>
  </li>
)

NavigationItem.propTypes = {
  icon: PropTypes.string,
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

NavigationItem.defaultProps = {
  icon: undefined,
}

export default NavigationItem
