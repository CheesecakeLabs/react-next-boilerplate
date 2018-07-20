import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import ReactModal from 'react-modal'

import styles from './styles.css'

class Modal extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  static defaultProps = {
    iconURL: undefined,
    className: undefined,
    onClick: () => {},
  }

  constructor() {
    super()

    this.state = {
      modalIsOpen: true,
    }
  }

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
