import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.css'

const ModalHeader = ({ className, children }) => (
  <h3 className={classNames(styles.title, className)}>{children}</h3>
)

ModalHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

ModalHeader.defaultProps = {
  className: undefined,
}
export default ModalHeader
