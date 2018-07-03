import React, { Component } from 'react'

import PropTypes from 'prop-types'
import styles from './styles.css'
import uploadIcon from '_images/upload-icon.png'
import ImagePreviewModal from '_molecules/ImagePreviewModal'

class ImageUpload extends Component {
  state = {
    selectedFile: null,
    notAcceptedFileSize: null,
    notAcceptedFileDimensions: null,
    showImagePreview: false,
  }

  showImagePreview = imageFile => {
    this.setState({ selectedFile: imageFile, showImagePreview: true })
  }

  hideImagePreview = () => {
    this.setState({ showImagePreview: false })
  }

  fileSelectedHandler = event => {
    const reader = new FileReader()
    const file = event.target.files[0]

    reader.onload = event => {
      const image = new Image()
      image.src = event.target.result
      image.onload = () => {
        this.validateImageDimensions(file.size, image.height, image.width)
        if (this.props.withPreview) {
          this.showImagePreview(image.src)
        } else {
          this.setState({ selectedFile: image.src })
        }
      }
    }
    event.target.value = null
    reader.readAsDataURL(file)
  }

  fileUploadHandler = () => {
    //Add endpoint to upload image here
  }

  isAInvalidFileSize = size => {
    const { minFileSize, maxFileSize } = this.props
    return size < minFileSize || size > maxFileSize
  }

  isAInvalidDimension = (height, width) => {
    const { minHeight, maxHeight, minWidth, maxWidth } = this.props
    return height < minHeight || height > maxHeight || width < minWidth || width > maxWidth
  }

  validateImageDimensions = (size, height, width) => {
    const notAcceptedFileSize = this.isAInvalidFileSize(size) ? size : null
    const notAcceptedFileDimensions = this.isAInvalidDimension(height, width)
      ? { height, width }
      : null
    this.setState({ notAcceptedFileSize, notAcceptedFileDimensions })
  }

  renderErrors = () => {
    return (
      <div>
        {this.state.notAcceptedFileSize && (
          <div>
            Your file has {this.state.notAcceptedFileSize}. Max size is {this.props.maxFileSize} and
            Min size is {this.props.minFileSize}
          </div>
        )}

        {this.state.notAcceptedFileDimensions && (
          <div>
            Your file has height {this.state.notAcceptedFileDimensions.height} and width{' '}
            {this.state.notAcceptedFileDimensions.width}. Max Height {this.props.maxHeight} and min
            Height {this.props.minHeight}. Max Width {this.props.maxWidth} and min Width{' '}
            {this.props.minWidth}.
          </div>
        )}
      </div>
    )
  }

  openImagePreview = () => {
    const { selectedFile, notAcceptedFileSize, notAcceptedFileDimensions } = this.state
    if (this.props.withPreview && selectedFile !== null) {
      return (
        <ImagePreviewModal
          show={this.state.showImagePreview}
          handleClose={this.hideImagePreview}
          hasErrors={notAcceptedFileSize || notAcceptedFileDimensions}
          renderErrors={this.renderErrors()}
          image={selectedFile}
        />
      )
    }
  }

  render() {
    const { accept, label } = this.props
    const { selectedFile } = this.state

    let $imagePreview = null
    if (selectedFile) {
      $imagePreview = <img src={selectedFile} />
    }

    return (
      <div>
        <p>{label}</p>
        <input
          style={{ display: 'none' }}
          type="file"
          onChange={this.fileSelectedHandler}
          accept={accept}
          ref={fileInput => (this.fileInput = fileInput)}
          multiple={false}
        />
        <div className={styles.image_upload__container} onClick={() => this.fileInput.click()}>
          <img src={uploadIcon} alt="Image upload icon" />
          <p>Drag and drop a file here or click</p>
        </div>
        {this.openImagePreview()}
      </div>
    )
  }
}

ImageUpload.propTypes = {
  minWidth: PropTypes.number,
  maxWidth: PropTypes.number,
  minHeight: PropTypes.number,
  maxHeight: PropTypes.number,
  minFileSize: PropTypes.number,
  maxFileSize: PropTypes.number,
  accept: PropTypes.string,
  withPreview: PropTypes.bool,
  withCrop: PropTypes.bool,
  label: PropTypes.string,
}

ImageUpload.defaultProps = {
  minWidth: 0,
  maxWidth: 500,
  minHeight: 0,
  maxHeight: 500,
  minFileSize: 0,
  maxFileSize: 15000,
  accept: 'image/*',
  withPreview: true,
  withCrop: false,
  label: 'Max file size 15kb, accepted png, jpg, max width: 500px and max height 500px',
}

export default ImageUpload
