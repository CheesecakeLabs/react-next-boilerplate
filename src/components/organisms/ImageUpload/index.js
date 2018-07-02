import React, { Component } from 'react'

import PropTypes from 'prop-types'
import styles from './styles.css'
import uploadIcon from '_images/upload-icon.png'

class ImageUpload extends Component {
  state = {
    selectedFile: null,
    notAcceptedFileSize: null,
    notAcceptedFileDimensions: null,
  }

  fileSelectedHandler = event => {
    const reader = new FileReader()
    const file = event.target.files[0]

    reader.onload = event => {
      const image = new Image()
      image.src = event.target.result
      image.onload = () => {
        this.validateImageDimensions(file.size, image.height, image.width)
        this.setState({ selectedFile: image.src })
      }
    }

    reader.readAsDataURL(file)
  }

  fileUploadHandler = () => {
    //Add endpoint to upload image here
  }

  validateImageDimensions = (size, height, width) => {
    const { minFileSize, maxFileSize, minHeight, maxheight, minWidth, maxWidth } = this.props
    if (size < minFileSize || size > maxFileSize) {
      this.setState({ notAcceptedFileSize: size })
    }
    if (height < minHeight || height > maxheight || width < minWidth || width > maxWidth) {
      this.setState({ notAcceptedFileDimensions: { height, width } })
    }
  }

  renderErrors = () => {
    if (this.state.notAcceptedFileSize) {
      return (
        <div>
          Your file has {this.state.notAcceptedFileSize}. Max size {this.props.maxFileSize} and Min
          size {this.props.minFileSize}
        </div>
      )
    }

    if (this.state.notAcceptedFileDimensions) {
      return (
        <div>
          Your file has height {this.state.notAcceptedFileDimensions.height} and width{' '}
          {this.state.notAcceptedFileDimensions.width}. Max Height {this.props.maxHeight} and min
          Height {this.props.minHeight}. Max Width {this.props.maxWidth} and min Width{' '}
          {this.props.minWidth}.
        </div>
      )
    }
  }

  render() {
    const { accept } = this.props
    const { selectedFile } = this.state

    let $imagePreview = null
    if (selectedFile) {
      $imagePreview = <img src={selectedFile} />
    }
    return (
      <div>
        <input
          style={{ display: 'none' }}
          type="file"
          onChange={this.fileSelectedHandler}
          accept={accept}
          ref={fileInput => (this.fileInput = fileInput)}
        />
        {/* <button onClick={this.fileUploadHandler}>Upload your Image</button> */}
        <div className={styles.image_upload__container} onClick={() => this.fileInput.click()}>
          <img src={uploadIcon} alt="Image upload icon" />
          <p>Drag and drop a file here or click</p>
        </div>
        {this.renderErrors()}
        {$imagePreview}
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
  imgExtension: PropTypes.array,
  withPreview: PropTypes.bool,
  withCrop: PropTypes.bool,
}

ImageUpload.defaultProps = {
  minWidth: 0,
  maxWidth: 100,
  minHeight: 0,
  maxHeight: 100,
  minFileSize: 0,
  maxFileSize: 13000,
  accept: 'image/*',
  imgExtension: ['.jpg', '.gif', '.png'],
  withPreview: true,
  withCrop: false,
}

export default ImageUpload
