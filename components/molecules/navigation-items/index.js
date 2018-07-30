import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const NavigationItems = ({ children }) => <ul className={styles.navItems}>{children}</ul>

NavigationItems.propTypes = {
  children: PropTypes.node,
}

NavigationItems.defaultProps = {
  children: undefined,
}

export default NavigationItems
