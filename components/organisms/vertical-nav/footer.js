import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.css'

const NavFooter = ({ hasCoolapseContent, collapseContent, children, className }) => (
  <div
    className={classNames(styles.navFooter, className, {
      [styles.showCollapseFooterContent]: hasCoolapseContent,
    })}
  >
    <div className={styles.footerChildren}>{children}</div>
    <div className={styles.collapseFooterContent}>{collapseContent}</div>
  </div>
)

NavFooter.propTypes = {
  hasCoolapseContent: PropTypes.bool,
  collapseContent: PropTypes.element,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

NavFooter.defaultProps = {
  hasCoolapseContent: false,
  collapseContent: undefined,
  className: undefined,
}

export default NavFooter
