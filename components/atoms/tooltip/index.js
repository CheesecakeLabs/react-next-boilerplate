import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Popover from 'react-popover'

import styles from './styles.css'

class Tooltip extends Component {
  static propTypes = {
    body: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  }

  static defaultProps = {
    body: undefined,
    className: undefined,
  }

  state = {
    isOpen: false,
  }

  toggle = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }))
  }

  render() {
    const { isOpen } = this.state
    return (
      <Popover className={styles.toolTipText} isOpen={isOpen} body={this.props.body}>
        <div
          className={styles.toolTip}
          onMouseOver={() => this.toggle(true)}
          onMouseOut={() => this.toggle(false)}
        >
          {this.props.children}
        </div>
      </Popover>
    )
  }
}

export default Tooltip
