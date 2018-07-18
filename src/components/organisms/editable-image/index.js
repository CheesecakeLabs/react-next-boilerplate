import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-fetches'
import {
  isAInvalidFileSize,
  isAInvalidDimension,
  isAInvalidExtension,
} from '_utils/file-validations'

import DialogCaptureImage from '_organisms/dialog-capture-image'
import DialogPreviewImage from '_organisms/dialog-preview-image'
import Avatar from '_molecules/avatar'

import styles from './styles.css'

const mapDispatchToProps = (http, dispatch) => ({
  uploadImage: dispatch(http.post('upload/avatar'), {
    headers: { 'content-type': 'multipart/form-data' },
  }),
})

class EditableImage extends Component {
  state = {
    selectedFile: null,
    notAcceptedFileSize: null,
    notAcceptedFileDimensions: null,
    notAcceptedFileExtension: null,
    showImagePreviewOrEdition: false,
    imageUploadResponse: '',
    showDialogToGetImage: false,
  }

  onImageSelectedOrCaptured = imageSrc => {
    if (this.props.withPreview) {
      this.setImagePreviewState(imageSrc)
    } else {
      this.uploadImage(imageSrc)
    }
  }

  setGetImageDialogState = () => {
    this.setState({ showDialogToGetImage: true })
  }

  setImagePreviewState = imageFile => {
    this.setState({
      selectedFile: imageFile,
      showImagePreviewOrEdition: !this.imageHasAnInvalidField(),
    })
  }

  validateImageProperties = (size, height, width, extension) => {
    const {
      minFileSize,
      maxFileSize,
      minHeight,
      maxHeight,
      minWidth,
      maxWidth,
      acceptedImgExtensions,
    } = this.props

    const notAcceptedFileSize = isAInvalidFileSize(size, minFileSize, maxFileSize) ? size : null
    const notAcceptedFileDimensions = isAInvalidDimension(
      height,
      width,
      minHeight,
      maxHeight,
      minWidth,
      maxWidth
    )
      ? { height, width }
      : null
    const notAcceptedFileExtension = isAInvalidExtension(extension, acceptedImgExtensions)
      ? extension
      : null
    this.setState({ notAcceptedFileSize, notAcceptedFileDimensions, notAcceptedFileExtension })
  }

  imageHasAnInvalidField = () => {
    const { notAcceptedFileSize, notAcceptedFileDimensions, notAcceptedFileExtension } = this.state
    return notAcceptedFileSize || notAcceptedFileDimensions || notAcceptedFileExtension
  }

  openImagePreviewOrEdition = () => {
    const { selectedFile, showImagePreviewOrEdition } = this.state
    return (
      <DialogPreviewImage
        isOpen={showImagePreviewOrEdition}
        title="Image Preview"
        withCrop={this.props.withCrop}
        selectedFile={selectedFile}
        crop={this.props.crop}
        onContinueClick={this.uploadImage}
        onCancelClick={this.hideImagePreviewDialog}
      />
    )
  }

  selectedOrTakeAPhoto = () => {
    const { showDialogToGetImage, showImagePreviewOrEdition } = this.state
    return (
      <DialogCaptureImage
        isOpen={!showImagePreviewOrEdition && showDialogToGetImage}
        title="Selected or take a photo"
        accept={this.props.accept}
        userMediaEnabled={this.props.userMediaEnabled}
        userMedia={this.props.userMedia}
        fileSelectedHandler={this.fileSelectedHandler}
        invalidProperties={this.renderErrors()}
        onImageSelectedOrCaptured={this.onImageSelectedOrCaptured}
        onCancelClick={this.hideGetImageDialog}
      />
    )
  }

  hideGetImageDialog = () => {
    this.setState({ showDialogToGetImage: false })
  }

  hideImagePreviewDialog = () => {
    this.setState({ showImagePreviewOrEdition: false })
  }

  uploadImage = image => {
    this.props.uploadImage({ file: image }).then(({ data, error }) => {
      //TODO ADD LOADER
      this.setState(() => ({
        imageUploadResponse: data,
        showImagePreviewOrEdition: false,
        showDialogToGetImage: false,
      }))
    })
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

  renderErrors = () => {
    const { invalidFileSizeText, invalidFileDimensionsText, invalidFileExtension } = this.props
    let invalidProperties = []
    if (this.state.notAcceptedFileSize) {
      invalidProperties = [...invalidProperties, invalidFileSizeText]
    }

    if (this.state.notAcceptedFileDimensions) {
      invalidProperties = [...invalidProperties, invalidFileDimensionsText]
    }

    if (this.state.notAcceptedFileExtension) {
      invalidProperties = [...invalidProperties, invalidFileExtension]
    }

    return invalidProperties
  }

  render() {
    const { imageUploadResponse } = this.state
    return (
      <div>
        <div
          onClick={this.setGetImageDialogState}
          className={styles.imagePlaceholder}
          role="presentation"
        >
          <Avatar
            avatarURL={imageUploadResponse.url}
            className={imageUploadResponse.url ? styles.avatarShape : null}
          />
        </div>
        {this.selectedOrTakeAPhoto()}
        {this.openImagePreviewOrEdition()}
      </div>
    )
  }
}

EditableImage.propTypes = {
  minWidth: PropTypes.number,
  maxWidth: PropTypes.number,
  minHeight: PropTypes.number,
  maxHeight: PropTypes.number,
  minFileSize: PropTypes.number,
  maxFileSize: PropTypes.number,
  accept: PropTypes.string,
  withPreview: PropTypes.bool,
  withCrop: PropTypes.bool,
  acceptedImgExtensions: PropTypes.arrayOf(PropTypes.string),
  invalidFileSizeText: PropTypes.string,
  invalidFileDimensionsText: PropTypes.string,
  invalidFileExtension: PropTypes.string,
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

EditableImage.defaultProps = {
  minWidth: 0,
  maxWidth: 500,
  minHeight: 0,
  maxHeight: 500000,
  minFileSize: 0,
  maxFileSize: 150,
  accept: 'image/*',
  withPreview: true,
  withCrop: false,
  acceptedImgExtensions: ['.jpg', '.jpeg', '.png'],
  invalidFileSizeText: 'File size is too big',
  invalidFileDimensionsText: 'Invalid file size dimension',
  invalidFileExtension: 'It is not a supported file extension',
  crop: undefined,
  userMediaEnabled: true,
  userMedia: undefined,
}

export default connect(
  null,
  mapDispatchToProps
)(EditableImage)
