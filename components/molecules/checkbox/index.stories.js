import PropTypes from 'prop-types'
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, number } from '@storybook/addon-knobs/react'

import Checkbox from './index'

class CustomCheckboxGroup extends React.Component {
  state = { values: [1] }

  includesValue = val => this.state.values.includes(val)

  handleChange = e => {
    const value = parseInt(e.target.value, 10)
    const { values } = this.state

    const newValues = this.includesValue(value)
      ? values.filter(arrVal => arrVal !== value)
      : [...values, value].sort()

    this.setState({ values: newValues })
  }

  render = () => (
    <React.Fragment>
      <h1>Selected: {this.state.values.join(', ')}</h1>

      {React.Children.map(this.props.children, child => {
        const childProps = {
          key: child.props.value,
          name: 'checkbox[]',
          isChecked: this.includesValue(child.props.value),
          handleChange: this.handleChange,
        }

        return React.cloneElement(child, childProps)
      })}
    </React.Fragment>
  )
}

CustomCheckboxGroup.propTypes = {
  children: PropTypes.node.isRequired,
}

CustomCheckboxGroup.defaultProps = {
  children: null,
}

storiesOf('Molecules/Checkbox', module)
  .addDecorator(withKnobs)
  .add(
    'initial',
    withInfo({ text: 'Initial component' })(() => (
      <Checkbox name="checkbox" id="checkbox" value="1" handleChange={() => {}} />
    ))
  )
  .add(
    'checked',
    withInfo({ text: '**isChecked{true}**' })(() => (
      <Checkbox name="checkbox" id="checkbox" value="1" isChecked handleChange={() => {}} />
    ))
  )
  .add(
    'checked and disabled',
    withInfo({ text: '**isChecked{true} disabled**' })(() => (
      <Checkbox
        name="checkbox"
        id="checkbox"
        value="1"
        isChecked
        disabled
        handleChange={() => {}}
      />
    ))
  )
  .add(
    'custom checkbox group',
    withInfo({ text: 'text' })(() => (
      <CustomCheckboxGroup>
        <Checkbox value={number('value #1', 1)} id="checkbox1" />
        <Checkbox value={number('value #2', 2)} id="checkbox2" />
        <Checkbox value={number('value #3', 3)} id="checkbox3" />
        <Checkbox value={number('value #4', 4)} id="checkbox4" disabled />
      </CustomCheckboxGroup>
    ))
  )
