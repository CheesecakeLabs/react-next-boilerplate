import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import styles from './styles.css'

const Title = ({ className, children }) => (
  <h1 className={classNames(styles.modalTitle, className)}>{children}</h1>
)

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Title.defaultProps = {
  className: undefined,
}
export default Title
