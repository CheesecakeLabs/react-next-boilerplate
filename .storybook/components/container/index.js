import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.css'

const THEMES = {
  dark: styles.dark,
}

const Container = ({ theme, className, isDarkResponsive, children }) => (
  <div
    className={classNames(
      styles.container,
      THEMES[theme],
      { [styles.darkResponsive]: isDarkResponsive },
      className
    )}
  >
    {children}
  </div>
)

Container.propTypes = {
  theme: PropTypes.string,
  className: PropTypes.string,
  isDarkResponsive: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

Container.defaultProps = {
  theme: undefined,
  isDarkResponsive: false,
  className: undefined,
}

export default Container
