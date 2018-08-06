import PropTypes from 'prop-types'
import React, { cloneElement, Children, Component, Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, number } from '@storybook/addon-knobs/react'

import Checkbox from './index'

class CustomCheckboxGroup extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  state = { values: [1] }

  includesValue = val => {
    const { values } = this.state
    return values.includes(val)
  }

  handleChange = event => {
    const value = parseInt(event.target.value, 10)
    const { values } = this.state

    const newValues = this.includesValue(value)
      ? values.filter(arrVal => arrVal !== value)
      : [...values, value].sort()

    this.setState({ values: newValues })
  }

  render() {
    const { values } = this.state
    const { children } = this.props
    return (
      <Fragment>
        <h1>Selected: {values.join(', ')}</h1>

        {Children.map(children, child => {
          const childProps = {
            key: child.props.value,
            name: 'checkbox[]',
            checked: this.includesValue(child.props.value),
            handleChange: this.handleChange,
          }

          return cloneElement(child, childProps)
        })}
      </Fragment>
    )
  }
}

storiesOf('Molecules/Checkbox', module)
  .addDecorator(withKnobs)
  .add(
    'initial',
    withInfo({ text: 'Initial component' })(() => (
      <Checkbox name="checkbox" id="checkbox" value="1" />
    ))
  )
  .add(
    'checked',
    withInfo({ text: 'Props: **checked**' })(() => (
      <Checkbox name="checkbox" id="checkbox" value="1" checked />
    ))
  )
  .add(
    'checked and disabled',
    withInfo({ text: 'Props: **checked disabled**' })(() => (
      <Checkbox name="checkbox" id="checkbox" value="1" checked disabled />
    ))
  )
  .add(
    'custom checkbox group',
    withInfo()(() => (
      <CustomCheckboxGroup>
        <Checkbox value={number('value #1', 1)} id="checkbox1" />
        <Checkbox value={number('value #2', 2)} id="checkbox2" />
        <Checkbox value={number('value #3', 3)} id="checkbox3" />
        <Checkbox value={number('value #4', 4)} id="checkbox4" disabled />
      </CustomCheckboxGroup>
    ))
  )
