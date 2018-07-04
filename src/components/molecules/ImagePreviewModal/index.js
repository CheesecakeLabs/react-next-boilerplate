import React, { Component } from 'react'
import ReactCrop, { makeAspectCrop } from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import PropTypes from 'prop-types'

import styles from './styles.css'

class ImagePreviewModal extends Component {
  state = {
    crop: {
      x: 10,
      y: 10,
      aspect: 16 / 9,
      width: 80,
      height: 80,
    },
  }

  onImageLoaded = image => {
    this.setState({
      crop: makeAspectCrop(
        {
          x: 10,
          y: 10,
          aspect: 16 / 9,
          width: 80,
          height: 80,
        },
        image.width / image.height
      ),
    })
  }

  onCropComplete = crop => {}

  onCropChange = (crop, pixelCrop) => {
    this.setState({ crop })
  }

  render() {
    const { image, show, handleClose, renderErrors, hasErrors, uploadImage, withCrop } = this.props
    if (!show) {
      return null
    }
    return (
      <div className={styles.image_preview__modal}>
        <div className={styles.image_preview__modal_content}>
          {renderErrors}
          {withCrop ? (
            <div className={styles.image__wrapper}>
              <ReactCrop
                src={image}
                crop={this.state.crop}
                onImageLoaded={this.onImageLoaded}
                onComplete={this.onCropComplete}
                onChange={this.onCropChange}
                keepSelection
              />
            </div>
          ) : (
            <img src={image} alt="icon upload" />
          )}

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
  renderErrors: PropTypes.func,
  hasErrors: PropTypes.bool,
  withCrop: PropTypes.bool,
}

ImagePreviewModal.defaultProps = {
  uploadImage: null,
  renderErrors: null,
  hasErrors: false,
  withCrop: false,
}

export default ImagePreviewModal
