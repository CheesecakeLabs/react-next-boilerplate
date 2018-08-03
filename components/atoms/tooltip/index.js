import React from 'react'
import PropTypes from 'prop-types'
import Popover from 'react-popover'

import styles from './styles.css'

class Tooltip extends React.Component {
  state = {
    isOpen: true,
  }

  toggle(toState = null) {
    this.setState({ isOpen: toState === null ? !this.state.isOpen : toState })
  }
  render() {
    const { isOpen } = this.state
    return (
      <Popover className={styles.tooltiptext} isOpen={isOpen} body="o ousado chegou kkkkjjk">
        <div
          className={styles.tooltip}
          onMouseOver={() => this.toggle(true)}
          onMouseOut={() => this.toggle(false)}
        >
          {this.props.children}
        </div>
      </Popover>
    )
  }
}

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
}

Tooltip.defaultProps = {
  className: undefined,
}
export default Tooltip
