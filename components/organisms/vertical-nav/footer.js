import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Icon from '_components/atoms/icon'

import styles from './styles.css'

const NavFooter = ({ hasCoolapseContent, collapseIconUrl, children, className }) => (
  <div
    className={classNames(styles.navFooter, className, {
      [styles.showCollapseFooterContent]: hasCoolapseContent,
    })}
  >
    <div className={styles.footerChildren}>{children}</div>
    <div className={styles.collapseFooterContent}>{<Icon src={collapseIconUrl} />}</div>
  </div>
)

NavFooter.propTypes = {
  hasCoolapseContent: PropTypes.bool,
  collapseIconUrl: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

NavFooter.defaultProps = {
  hasCoolapseContent: false,
  collapseIconUrl: undefined,
  className: undefined,
}

export default NavFooter
