import React, { Component } from 'react'
import styles from './styles.css'

import PropTypes from 'prop-types'

class ImagePreviewModal extends Component {
  render() {
    if (!this.props.show) {
      return null
    }
    return (
      <div className={styles.image_preview__modal}>
        <div className={styles.image_preview__modal_content}>
          <img src={this.props.image} alt="Image upload icon" />
          <div className={styles.image_preview__modal_buttons}>
            <button onClick={this.props.uploadImage}>Upload</button>
            <button onClick={this.props.handleClose}>Cancel</button>
          </div>
        </div>
      </div>
    )
  }
}

ImagePreviewModal.propTypes = {
  image: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default ImagePreviewModal
