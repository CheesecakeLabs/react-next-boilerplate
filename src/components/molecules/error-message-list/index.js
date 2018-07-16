import React from 'react'
import PropTypes from 'prop-types'

import ErrorMessage from '_atoms/error-message'

const ErrorMessageList = ({ children }) => <ErrorMessage>{children}</ErrorMessage>

ErrorMessageList.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ErrorMessageList
