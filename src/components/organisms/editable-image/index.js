import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-fetches'

import DialogCaptureImage from '_molecules/dialog-capture-image'
import RoundedImage from '_molecules/rounded-image'
import DialogPreviewImage from '_molecules/dialog-preview-image'

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
      this.setState({ selectedFile: imageSrc })
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

  imageHasAnInvalidField = () => {
    const { notAcceptedFileSize, notAcceptedFileDimensions, notAcceptedFileExtension } = this.state
    return notAcceptedFileSize || notAcceptedFileDimensions || notAcceptedFileExtension
  }

  openImagePreviewOrEdition = () => {
    const { selectedFile, showImagePreviewOrEdition } = this.state

    if (showImagePreviewOrEdition) {
      return (
        <DialogPreviewImage
          withCrop={this.props.withCrop}
          isOpen={this.state.showImagePreviewOrEdition}
          onCancelClick={this.hideImagePreviewDialog}
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

  selectedOrTakeAPhoto = () => {
    const { showDialogToGetImage, selectedFile, showImagePreviewOrEdition } = this.state

    if (!showImagePreviewOrEdition && showDialogToGetImage) {
      return (
        <DialogCaptureImage
          {...this.props}
          fileSelectedHandler={this.fileSelectedHandler}
          isOpen={showDialogToGetImage}
          title="Selected or take a photo"
          selectedFile={selectedFile}
          invalidProperties={this.renderErrors()}
          onImageSelectedOrCaptured={this.onImageSelectedOrCaptured}
        />
      )
    }

    return null
  }

  hideGetImageDialog = () => {
    this.setState({ showDialogToGetImage: false })
  }

  hideImagePreviewDialog = () => {
    this.setState({ showImagePreviewOrEdition: false })
  }

  uploadImage = () => {
    const { selectedFile } = this.state
    this.props.uploadImage({ file: selectedFile }).then(({ data, error }) => {
      this.setState(prevState => ({
        imageUploadResponse: data,
        showImagePreviewOrEdition: false,
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
    return (
      <div>
        <div onClick={this.setGetImageDialogState} className={styles.imagePlaceholder}>
          <RoundedImage />
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
  description: PropTypes.string,
  buttonText: PropTypes.string,
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
