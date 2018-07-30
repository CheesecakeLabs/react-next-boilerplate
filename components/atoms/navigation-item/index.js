import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Icon from '_components/atoms/icon'
import drawerStyle from '_components/organisms/drawer/styles.css'

import styles from './styles.css'

const NavigationItem = ({ iconSrc, link, className, children }) => (
  <li className={classNames(styles.navItem, drawerStyle.navItem)}>
    <a className={styles.link} href={link}>
      <Icon className={styles.icon} src={iconSrc} />
      <span className={className}>{children}</span>
    </a>
  </li>
)

NavigationItem.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

NavigationItem.defaultProps = {
  className: undefined,
}

export default NavigationItem
