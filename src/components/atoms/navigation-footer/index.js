import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.css'

const NavigationFooter = ({ children, className }) => (
  <div className={classNames(styles.navFooter, className)}>{children}</div>
)

NavigationFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

NavigationFooter.defaultProps = {
  className: undefined,
}

export default NavigationFooter
