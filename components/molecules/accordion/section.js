import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Button from '_components/atoms/button'

import styles from './styles.css'

class Section extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    className: PropTypes.string,
  }

  static defaultProps = {
    title: undefined,
    className: undefined,
  }

  state = {
    isOpen: true,
    bodyHeight: 'auto',
  }

  handleClick = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }))
  }

  bodyRef = element => {
    const bodyRect = element.getBoundingClientRect()
    this.setState({ bodyHeight: bodyRect.height, isOpen: false })
  }

  render() {
    const { isOpen, bodyHeight } = this.state
    const { className, title, children } = this.props
    const height = isOpen ? bodyHeight : 0
    const iconClass = classnames(styles.downIcon, {
      [styles.exitIcon]: isOpen,
    })
    const titleClass = classnames(styles.title, {
      [styles.selected]: isOpen,
    })

    return (
      <div className={classnames(styles.section, className)}>
        <Button className={styles.header} onClick={this.handleClick}>
          <h1 className={titleClass}>{title}</h1>
          <i className={iconClass} />
        </Button>
        <div className={styles.body} ref={this.bodyRef} style={{ height }}>
          <p>{children}</p>
        </div>
      </div>
    )
  }
}

export default Section
