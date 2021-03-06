import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-fetches'

import {
  isAInvalidFileSize,
  isAInvalidDimension,
  isAInvalidExtension,
} from '_components/utils/file-validations'
import DialogCaptureImage from '_components/organisms/dialog-capture-image'
import DialogPreviewImage from '_components/organisms/dialog-preview-image'
import Avatar from '_components/molecules/avatar'
import Loader from '_components/atoms/loader'
import Overlay from '_components/atoms/overlay'

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
    showLoader: false,
  }

  onImageSelectedOrCaptured = imageSrc => {
    const { withPreview } = this.props
    if (withPreview) {
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
    const { withCrop, crop, cropShape } = this.props
    return (
      <DialogPreviewImage
        isOpen={showImagePreviewOrEdition}
        title="Image Preview"
        withCrop={withCrop}
        selectedFile={selectedFile}
        crop={crop}
        cropShape={cropShape}
        onContinueClick={this.uploadImage}
        onCancelClick={this.hideImagePreviewDialog}
      />
    )
  }

  selectedOrTakeAPhoto = () => {
    const { accept, userMediaEnabled, userMedia } = this.props
    const { showDialogToGetImage, showImagePreviewOrEdition } = this.state
    return (
      <DialogCaptureImage
        isOpen={!showImagePreviewOrEdition && showDialogToGetImage}
        title="Selected or take a photo"
        accept={accept}
        userMediaEnabled={userMediaEnabled}
        userMedia={userMedia}
        fileSelectedHandler={this.fileSelectedHandler}
        invalidProperties={this.renderErrors()}
        onImageSelected={this.onImageSelectedOrCaptured}
        onCancelClick={this.hideGetImageDialog}
      />
    )
  }

  selectedPhotoFromComputer = () => {
    const { accept } = this.props
    return (
      <input
        style={{ display: 'none' }}
        type="file"
        onChange={this.fileSelectedHandler}
        accept={accept}
        ref={fileInput => {
          this.fileInput = fileInput
        }}
        multiple={false}
      />
    )
  }

  hideGetImageDialog = () => {
    this.setState({ showDialogToGetImage: false })
  }

  hideImagePreviewDialog = () => {
    this.setState({ showImagePreviewOrEdition: false })
  }

  uploadImage = () => {
    const { uploadImage } = this.props
    const { selectedFile } = this.state
    this.setState({ showLoader: true })
    uploadImage({ file: selectedFile }).then(({ data }) => {
      this.setState(() => ({
        imageUploadResponse: data,
        showImagePreviewOrEdition: false,
        showDialogToGetImage: false,
        showLoader: false,
      }))
    })
  }

  showImageUploadLoader = () => {
    const { showLoader } = this.state
    return (
      <Overlay show={showLoader}>
        <Loader />
      </Overlay>
    )
  }

  fileSelectedHandler = event => {
    const reader = new FileReader()
    const file = event.target.files[0]

    reader.onload = e => {
      const image = new Image()
      image.src = e.target.result
      const imgExtension = `.${file.type.split('/').pop()}`
      image.onload = () => {
        this.validateImageProperties(file.size, image.height, image.width, imgExtension)
        this.onImageSelectedOrCaptured(image.src)
      }
    }
    reader.readAsDataURL(file)
  }

  renderErrors = () => {
    const { invalidFileSizeText, invalidFileDimensionsText, invalidFileExtension } = this.props
    const { notAcceptedFileSize, notAcceptedFileDimensions, notAcceptedFileExtension } = this.state
    let invalidProperties = []
    if (notAcceptedFileSize) {
      invalidProperties = [...invalidProperties, invalidFileSizeText]
    }

    if (notAcceptedFileDimensions) {
      invalidProperties = [...invalidProperties, invalidFileDimensionsText]
    }

    if (notAcceptedFileExtension) {
      invalidProperties = [...invalidProperties, invalidFileExtension]
    }

    return invalidProperties
  }

  render() {
    const { imageUploadResponse } = this.state
    const { userMediaEnabled } = this.props
    return (
      <div>
        <div
          onClick={userMediaEnabled ? this.setGetImageDialogState : () => this.fileInput.click()}
          className={styles.imagePlaceholder}
          role="presentation"
        >
          <Avatar
            avatarURL={imageUploadResponse.url}
            className={imageUploadResponse.url ? styles.avatarShape : null}
          />
        </div>
        {userMediaEnabled && this.selectedOrTakeAPhoto()}
        {!userMediaEnabled && this.selectedPhotoFromComputer()}
        {this.openImagePreviewOrEdition()}
        {this.showImageUploadLoader()}
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
  cropShape: PropTypes.string,
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
  uploadImage: PropTypes.func.isRequired,
}

EditableImage.defaultProps = {
  minWidth: 0,
  maxWidth: 500,
  minHeight: 0,
  maxHeight: 500000,
  minFileSize: 0,
  maxFileSize: 1500000000,
  accept: 'image/*',
  withPreview: true,
  withCrop: false,
  acceptedImgExtensions: ['.jpg', '.jpeg', '.png'],
  invalidFileSizeText: 'File size is too big',
  invalidFileDimensionsText: 'Invalid file size dimension',
  invalidFileExtension: 'It is not a supported file extension',
  crop: undefined,
  cropShape: 'square',
  userMediaEnabled: true,
  userMedia: undefined,
}

export default connect(
  null,
  mapDispatchToProps
)(EditableImage)
