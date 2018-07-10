import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-fetches'

import uploadIcon from '_images/upload-icon.png'
import ImageDialog from '_molecules/image-dialog'
import WebcamCapture from '_molecules/webcam-capture'

import styles from './styles.css'

const mapDispatchToProps = (http, dispatch) => ({
  uploadImage: dispatch(http.post('upload/avatar'), {
    headers: { 'content-type': 'multipart/form-data' },
  }),
})

class ImageUpload extends Component {
  state = {
    selectedFile: null,
    notAcceptedFileSize: null,
    notAcceptedFileDimensions: null,
    notAcceptedFileExtension: null,
    showImagePreview: false,
    imageUpload: '',
  }

  onImageSelectedOrCaptured = imageSrc => {
    if (this.props.withPreview) {
      this.setImagePreviewState(imageSrc)
    } else {
      this.setState({ selectedFile: imageSrc })
    }
  }

  setImagePreviewState = imageFile => {
    this.setState({ selectedFile: imageFile, showImagePreview: true })
  }

  uploadImage = () => {
    const { selectedFile } = this.state
    this.props.uploadImage({ file: selectedFile }).then(({ data, error }) => {
      this.setState(prevState => ({
        imageUpload: data,
        showImagePreview: false,
      }))
    })
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
        this.onImageSelectedOrCaptured(image.src)
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
          onContinueClick={this.uploadImage}
          title="preview da imagem"
          cancelText="Cancel"
          selectedFile={selectedFile}
          invalidProperties={this.renderErrors()}
          disableContinueButton={this.renderErrors().length > 0}
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
    const { accept, description, buttonText, userMediaEnabled, userMedia } = this.props

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

        <div className={styles.image_upload__container}>
          <img src={uploadIcon} alt="Icon upload" />
          <p>{description}</p>
          {userMediaEnabled && (
            <WebcamCapture
              onImageCapturedFromWebcam={this.onImageSelectedOrCaptured}
              userMedia={userMedia}
            />
          )}
          <button onClick={() => this.fileInput.click()}>{buttonText}</button>
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
  description: PropTypes.string,
  buttonText: PropTypes.string,
  acceptedImgExtensions: PropTypes.arrayOf(PropTypes.string),
  crop: PropTypes.shape({
    aspect: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  userMediaEnabled: PropTypes.bool,
  userMedia: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
    scrennshotFormat: PropTypes.string,
    videoConstraints: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
      facingMode: PropTypes.string,
    }),
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
  description:
    'Max file size 15kb, accepted png, jpg, max width: 500px and max height 500px. Accepted: jpg, jpeg, png, gif',
  buttonText: 'Choose image from computer',
  acceptedImgExtensions: ['.jpg', '.jpeg', '.png'],
  crop: undefined,
  userMediaEnabled: true,
  userMedia: undefined,
}

export default connect(
  null,
  mapDispatchToProps
)(ImageUpload)
