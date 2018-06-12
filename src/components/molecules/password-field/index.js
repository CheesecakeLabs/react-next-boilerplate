import PropTypes from 'prop-types'
import React, { Component } from 'react'

import icInvisible from '_images/ic-invisible.png'
import icVisible from '_images/ic-visible.png'

import Label from '../../atoms/label'
import Input from '../../atoms/input'

import styles from './styles.css'

class PasswordMask extends Component {
  state = {
    type: 'password',
  }

  showHide = event => {
    event.preventDefault()
    event.stopPropagation()
    this.setState({
      type: this.state.type === 'input' ? 'password' : 'input',
    })
  }

  render() {
    return (
      <div>
        <Label label={this.props.label} />
        <div className={styles.passwordMask}>
          <input type={this.state.type} value={this.props.value} onChange={this.props.changed} />
          <button onClick={this.showHide} className={styles.button}>
            <img
              src={this.state.type === 'input' ? icVisible : icInvisible}
              alt="Visibility icon"
            />
          </button>
        </div>
      </div>
    )
  }
}

PasswordMask.propTypes = {
  label: PropTypes.string.isRequired,
}

export default PasswordMask
