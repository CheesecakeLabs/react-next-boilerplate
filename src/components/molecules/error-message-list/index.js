import React from 'react'
import PropTypes from 'prop-types'

import ErrorMessage from '_atoms/error-message'

const ErrorMessageList = ({ errors }) =>
  errors.map((errorMessage, index) => <ErrorMessage text={errorMessage} key={index} />)

ErrorMessageList.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default ErrorMessageList
