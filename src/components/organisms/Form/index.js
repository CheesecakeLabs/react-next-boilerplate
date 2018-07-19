import PropTypes from 'prop-types'
import React, { Children, Component, cloneElement } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isSubmitValid: {},
    }
  }
  onSubmit = ev => {
    ev.preventDefault()
    this.props.handleSubmit(ev)
  }

  handleFormValidation = (fieldName, isChildValid = false) => {
    const childStatus = { [fieldName]: isChildValid }
    this.setState(oldState => ({ isSubmitValid: { ...oldState.isSubmitValid, ...childStatus } }))
  }

  render = () => {
    const { className, children } = this.props
    const formProps = { handleFormValidation: this.handleFormValidation }
    const formChildren = Children.map(children, child => cloneElement(child, formProps))

    return (
      <form className={className} onSubmit={this.onSubmit}>
        {formChildren}
        <input type="submit" value="submit" />
      </form>
    )
  }
}

Form.propTypes = {
  className: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  children: PropTypes.oneOfType(PropTypes.element, PropTypes.arrayOf(PropTypes.element)).isRequired,
}

Form.defaultProps = {
  className: undefined,
  handleSubmit: null,
  children: null,
}

export default Form
