import PropTypes from 'prop-types'
import React from 'react'

const Form = ({ className, handleSubmit, children }) => (
  <form className={className} onSubmit={handleSubmit}>
    {children}
  </form>
)

const elements = [PropTypes.element, PropTypes.arrayOf(PropTypes.element)]

Form.propTypes = {
  className: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  children: PropTypes.oneOfType(elements).isRequired,
}

Form.defaultProps = {
  className: undefined,
  handleSubmit: null,
  children: null,
}

export default Form
