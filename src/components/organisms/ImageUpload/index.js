import React, { Component } from 'react'
import PropTypes from 'prop-types'

import uploadIcon from '_images/upload-icon.png'
import ImageDialog from '_molecules/image-dialog'

import styles from './styles.css'

class ImageUpload extends Component {
  state = {
    selectedFile: null,
    notAcceptedFileSize: null,
    notAcceptedFileDimensions: null,
    notAcceptedFileExtension: null,
    showImagePreview: false,
  }

  setImagePreviewState = imageFile => {
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
      const imgExtension = `.${file.type.split('/').pop()}`
      image.onload = () => {
        this.validateImageProperties(file.size, image.height, image.width, imgExtension)
        if (this.props.withPreview) {
          this.setImagePreviewState(image.src)
        } else {
          this.setState({ selectedFile: image.src })
        }
      }
    }
    event.target.value = null
    reader.readAsDataURL(file)
  }

  isAInvalidFileSize = size => {
    const { minFileSize, maxFileSize } = this.props
    return size < minFileSize || size > maxFileSize
  }

  isAInvalidDimension = (height, width) => {
    const { minHeight, maxHeight, minWidth, maxWidth } = this.props
    return height < minHeight || height > maxHeight || width < minWidth || width > maxWidth
  }

  isAInvalidExtension = extension => {
    const validExtensions = [...this.props.acceptedImgExtensions]
    return !validExtensions.includes(extension)
  }

  validateImageProperties = (size, height, width, extension) => {
    const notAcceptedFileSize = this.isAInvalidFileSize(size) ? size : null
    const notAcceptedFileDimensions = this.isAInvalidDimension(height, width)
      ? { height, width }
      : null
    const notAcceptedFileExtension = this.isAInvalidExtension(extension) ? extension : null
    this.setState({ notAcceptedFileSize, notAcceptedFileDimensions, notAcceptedFileExtension })
  }

  openImagePreview = () => {
    const { selectedFile } = this.state
    if (this.props.withPreview && selectedFile !== null) {
      return (
        <ImageDialog
          withCrop={this.props.withCrop}
          isOpen={this.state.showImagePreview}
          onCancelClick={this.hideImagePreview}
          title="preview da imagem"
          cancelText="Cancel"
          selectedFile={selectedFile}
          invalidProperties={this.renderErrors()}
          isAValidFile={this.renderErrors().length <= 0}
          crop={this.props.crop}
        />
      )
    }
    return null
  }

  renderErrors = () => {
    let invalidProperties = []
    if (this.state.notAcceptedFileSize) {
      invalidProperties = [...invalidProperties, 'file size is too big']
    }

    if (this.state.notAcceptedFileDimensions) {
      invalidProperties = [...invalidProperties, 'invalid file size dimension']
    }

    if (this.state.notAcceptedFileExtension) {
      invalidProperties = [...invalidProperties, 'is not a supported file extension']
    }

    return invalidProperties
  }

  render() {
    const { accept, label, buttonText } = this.props

    return (
      <div>
        <input
          style={{ display: 'none' }}
          type="file"
          onChange={this.fileSelectedHandler}
          accept={accept}
          ref={fileInput => (this.fileInput = fileInput)}
          multiple={false}
        />

        <div className={styles.image_upload__container} onClick={() => this.fileInput.click()}>
          <img src={uploadIcon} alt="Icon upload" />
          <p>{label}</p>
          <button>{buttonText}</button>
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
  buttonText: PropTypes.string,
  acceptedImgExtensions: PropTypes.arrayOf(PropTypes.string),
  crop: PropTypes.shape({
    aspect: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
  }),
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
  label:
    'Max file size 15kb, accepted png, jpg, max width: 500px and max height 500px. Accepted: jpg, jpeg, png, gif',
  buttonText: 'Choose image',
  acceptedImgExtensions: ['.jpg', '.png'],
  crop: undefined,
}

export default ImageUpload
