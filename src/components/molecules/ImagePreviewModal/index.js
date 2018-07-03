import React, { Component } from 'react'
import styles from './styles.css'

import PropTypes from 'prop-types'

class ImagePreviewModal extends Component {
  render() {
    const { image, show, handleClose, renderErrors, hasErrors, uploadImage } = this.props
    if (!show) {
      return null
    }
    return (
      <div className={styles.image_preview__modal}>
        <div className={styles.image_preview__modal_content}>
          {renderErrors}
          <img src={image} alt="Image upload icon" />
          <div className={styles.image_preview__modal_buttons}>
            <button onClick={uploadImage} disabled={hasErrors}>
              Upload
            </button>
            <button onClick={handleClose}>Cancel</button>
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
  uploadImage: PropTypes.func,
}

ImagePreviewModal.defaultProps = {
  uploadImage: null,
}

export default ImagePreviewModal
