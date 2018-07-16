import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Form extends Component {
  onSubmit = ev => {
    ev.preventDefault()
    this.props.handleSubmit(ev)
  }

  render = () => {
    const { className, children } = this.props

    return (
      <form className={className} onSubmit={this.onSubmit}>
        {children}
        <input type="submit" value="submit" />
      </form>
    )
  }
}

const elementTypes = [PropTypes.element, PropTypes.arrayOf(PropTypes.element)]

Form.propTypes = {
  className: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  children: PropTypes.oneOfType(elementTypes).isRequired,
}

Form.defaultProps = {
  className: undefined,
  handleSubmit: null,
  children: null,
}

export default Form
