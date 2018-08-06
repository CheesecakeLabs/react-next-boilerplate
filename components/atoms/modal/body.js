import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.css'

const ModalBody = ({ className, children }) => (
  <div className={classNames(styles.body, className)}>{children}</div>
)

ModalBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

ModalBody.defaultProps = {
  className: undefined,
}
export default ModalBody
