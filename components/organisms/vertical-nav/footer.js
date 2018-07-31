import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.css'

const NavFooter = ({ children, className }) => (
  <div className={classNames(styles.navFooter, className)}>{children}</div>
)

NavFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

NavFooter.defaultProps = {
  className: undefined,
}

export default NavFooter
