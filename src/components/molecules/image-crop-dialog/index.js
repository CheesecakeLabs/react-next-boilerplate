import React, { Component } from 'react'
import PropTypes from 'prop-types'

import 'react-image-crop/dist/ReactCrop.css'

import ImageCropper from '_molecules/image-cropper'
import Dialog from '_molecules/dialog'
import ErrorMessageList from '_molecules/error-message-list'

class ImageCropDialog extends Component {
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
    const { invalidProperties, selectedFile } = this.props
    return (
      <Dialog {...this.props}>
        <ErrorMessageList errors={invalidProperties} />
        <ImageCropper selectedFile={selectedFile} />
      </Dialog>
    )
  }
}

ImageCropDialog.propTypes = {
  selectedFile: PropTypes.string.isRequired,
  invalidProperties: PropTypes.arrayOf.string,
}

ImageCropDialog.defaultProps = {
  invalidProperties: [],
}

export default ImageCropDialog
