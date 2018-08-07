import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.css'

const HELPER_TYPE = {
  warning: styles.warning,
  error: styles.error,
  info: styles.info,
}

const Helper = ({ type, children }) => (
  <p className={classNames(styles.helper, HELPER_TYPE[type])}>{children}</p>
)

Helper.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Helper.defaultProps = {
  type: 'info',
}

export default Helper
