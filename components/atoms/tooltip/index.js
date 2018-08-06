import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Popover from 'react-popover'
import classnames from 'classnames'

import styles from './styles.css'

class Tooltip extends Component {
  static propTypes = {
    body: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    preferPlace: PropTypes.string,
    place: PropTypes.string,
  }

  static defaultProps = {
    className: undefined,
    preferPlace: 'right',
    place: 'right',
  }

  state = {
    isOpen: false,
  }

  showTooltip = isOpen => {
    this.setState({ isOpen })
  }

  render() {
    const { isOpen } = this.state
    const { children, body, className, preferPlace, place } = this.props
    return (
      <Popover
        className={styles.toolTipText}
        isOpen={isOpen}
        body={body}
        preferPlace={preferPlace}
        place={place}
      >
        <div
          className={classnames(styles.toolTip, className)}
          onMouseOver={() => this.showTooltip(true)}
          onFocus={() => this.showTooltip(true)}
          onMouseOut={() => this.showTooltip(false)}
          onBlur={() => this.showTooltip(false)}
        >
          {children}
        </div>
      </Popover>
    )
  }
}

export default Tooltip
