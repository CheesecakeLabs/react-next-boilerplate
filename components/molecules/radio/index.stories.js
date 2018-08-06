import PropTypes from 'prop-types'
import React, { cloneElement, Children, Component, Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, number } from '@storybook/addon-knobs/react'

import Radio from './index'

class CustomRadioGroup extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  state = { value: 1 }

  isEqualValue = val => {
    const { value } = this.state
    return value === val
  }

  handleChange = event => {
    const value = parseInt(event.target.value, 10)
    this.setState({ value })
  }

  render() {
    const { value } = this.state
    const { children } = this.props
    return (
      <Fragment>
        <h1>Selected: {value}</h1>

        {Children.map(children, child => {
          const childProps = {
            key: child.props.value,
            name: 'radio',
            checked: this.isEqualValue(child.props.value),
            handleChange: this.handleChange,
          }

          return cloneElement(child, childProps)
        })}
      </Fragment>
    )
  }
}

storiesOf('Molecules/Radio', module)
  .addDecorator(withKnobs)
  .add(
    'initial',
    withInfo({ text: 'Initial component' })(() => <Radio name="radio" id="radio" value="1" />)
  )
  .add(
    'checked',
    withInfo({ text: 'Props: **checked**' })(() => (
      <Radio name="radio" id="radio" value="1" checked />
    ))
  )
  .add(
    'checked and disabled',
    withInfo({ text: 'Props: **checked disabled**' })(() => (
      <Radio name="radio" id="radio" value="1" checked disabled />
    ))
  )
  .add(
    'custom radio group',
    withInfo()(() => (
      <CustomRadioGroup>
        <Radio value={number('value #1', 1)} id="radio1" />
        <Radio value={number('value #2', 2)} id="radio2" />
        <Radio value={number('value #3', 3)} id="radio3" />
        <Radio value={number('value #4', 4)} id="radio4" disabled />
      </CustomRadioGroup>
    ))
  )
