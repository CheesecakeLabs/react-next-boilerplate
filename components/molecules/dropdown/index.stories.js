import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs/react'

import Button from '_components/atoms/button'

import Dropdown from './index'

const CustomLabel = () => <span>dropdown</span>

class CustomDropdown extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  static defaultProps = {
    children: null,
  }

  state = { isOpen: false }

  handleClick = () => {
    this.setState(oldState => ({ isOpen: !oldState.isOpen }))
  }

  render = () => (
    <Dropdown handleClick={this.handleClick} isOpen={this.state.isOpen} button={<CustomLabel />}>
      {this.props.children}
    </Dropdown>
  )
}

storiesOf('Molecules/Dropdown', module)
  .addDecorator(withKnobs)
  .add(
    'initial',
    withInfo({ text: 'Initial component' })(() => (
      <Dropdown button="initial dropdown">
        <Button>#1 item</Button>
        <Button>#2 item</Button>
        <Button>#3 item</Button>
        <Button>#4 item</Button>
      </Dropdown>
    ))
  )
  .add(
    'custom button',
    withInfo({ text: 'Props: **button={<Component />}**' })(() => (
      <Dropdown button={<CustomLabel />}>
        <Button>#1 item</Button>
        <Button>#2 item</Button>
        <Button>#3 item</Button>
        <Button>#4 item</Button>
      </Dropdown>
    ))
  )
  .add(
    'stateful component',
    withInfo()(() => (
      <CustomDropdown>
        <Button>#1 item</Button>
        <Button>#2 item</Button>
        <Button>#3 item</Button>
        <Button>#4 item</Button>
      </CustomDropdown>
    ))
  )
