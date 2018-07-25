import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import ReactModal from 'react-modal'

import styles from './styles.css'

class Modal extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  static defaultProps = {
    iconURL: undefined,
    className: undefined,
    onClick: () => {},
  }

  state = { modalIsOpen: true }

  render() {
    const { children } = this.props

    return (
      <ReactModal
        isOpen={this.state.modalIsOpen}
        overlayClassName={styles.overlay}
        className={classNames(styles.window)}
      >
        {children}
      </ReactModal>
    )
  }
}
export default Modal
