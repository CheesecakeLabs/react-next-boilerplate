import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.css'

const Icon = ({ src, className }) => (
  <img className={classNames(styles.icon, className)} src={src} alt="icon" />
)

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Icon.defaultProps = {
  className: undefined,
}

export default Icon
