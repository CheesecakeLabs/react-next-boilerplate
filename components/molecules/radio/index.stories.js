import PropTypes from 'prop-types'
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, number } from '@storybook/addon-knobs/react'

import Radio from './index'

class CustomRadioGroup extends React.Component {
  state = { value: 1 }

  isEqualValue = val => this.state.value === val

  handleChange = e => {
    const value = parseInt(e.target.value, 10)
    this.setState({ value })
  }

  render = () => (
    <React.Fragment>
      <h1>Selected: {this.state.value}</h1>

      {React.Children.map(this.props.children, child => {
        const childProps = {
          key: child.props.value,
          name: 'radio',
          checked: this.isEqualValue(child.props.value),
          handleChange: this.handleChange,
        }

        return React.cloneElement(child, childProps)
      })}
    </React.Fragment>
  )
}

CustomRadioGroup.propTypes = {
  children: PropTypes.node.isRequired,
}

CustomRadioGroup.defaultProps = {
  children: null,
}

storiesOf('Molecules/Radio', module)
  .addDecorator(withKnobs)
  .add(
    'initial',
    withInfo({ text: 'Initial component' })(() => (
      <Radio name="radio" id="radio" value="1" />
    ))
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
