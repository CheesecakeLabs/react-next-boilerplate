import React from 'react'
import PropTypes from 'prop-types'

const ErrorMessageList = ({ children }) => <div>{children}</div>

ErrorMessageList.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ErrorMessageList
