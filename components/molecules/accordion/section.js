import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Button from '_components/atoms/button'

import styles from './styles.css'

class Section extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    sectionTitle: PropTypes.node,
  }

  static defaultProps = {
    sectionTitle: undefined,
    className: undefined,
  }

  state = {
    isOpen: true,
    bodyHeight: 'auto',
  }

  handleClick = () => {
    const { isOpen } = this.state
    this.setState({
      isOpen: !isOpen,
    })
  }

  bodyRef = element => {
    const bodyRect = element.getBoundingClientRect()
    this.setState({ bodyHeight: bodyRect.height, isOpen: false })
  }

  render = () => {
    const { isOpen, bodyHeight } = this.state
    const height = isOpen ? bodyHeight : 0
    const iconClass = classnames(styles.downIcon, {
      [styles.exitIcon]: isOpen,
    })
    const title = classnames(styles.title, {
      [styles.selected]: isOpen,
    })

    return (
      <div className={styles.section}>
        <Button className={styles.header} onClick={this.handleClick}>
          <h1 className={title}>{this.props.sectionTitle}</h1>
          <i className={iconClass} />
        </Button>
        <div className={styles.body} ref={this.bodyRef} style={{ height }}>
          <p>{this.props.children}</p>
        </div>
      </div>
    )
  }
}

export default Section
