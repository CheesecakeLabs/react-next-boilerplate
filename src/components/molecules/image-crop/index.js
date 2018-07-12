import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactCrop, { makeAspectCrop, getPixelCrop } from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

import styles from './styles.css'

class ImageCrop extends Component {
  state = {
    crop: {},
    pixelCrop: {},
    croppedBase64Image: '',
    originalImage: null,
  }

  onImageLoaded = image => {
    const cropProperties = makeAspectCrop(
      {
        ...this.props.crop,
      },
      image.width / image.height
    )

    const pixelToCrop = getPixelCrop(image, cropProperties)
    this.setState({
      crop: cropProperties,
      originalImage: image,
      pixelCrop: pixelToCrop,
    })
  }

  // onCropComplete = (crop, pixelCrop) => {}

  onCropChange = (crop, pixelCrop) => {
    this.setState({ crop, pixelCrop })
    this.getCroppedImage()
  }

  getCroppedImage = () => {
    const { pixelCrop, originalImage, croppedBase64Image } = this.state
    const canvas = document.createElement('canvas')
    canvas.width = pixelCrop.width
    canvas.height = pixelCrop.height
    const ctx = canvas.getContext('2d')

    ctx.drawImage(
      originalImage,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    )

    const base64Image = canvas.toDataURL('image/jpeg')
    this.setState({ croppedBase64Image: base64Image })
  }

  render() {
    return (
      <div>
        <div className={styles.container}>
          <ReactCrop
            src={this.props.selectedFile}
            crop={this.state.crop}
            onImageLoaded={this.onImageLoaded}
            onComplete={this.onCropComplete}
            onChange={this.onCropChange}
            keepSelection
          />
        </div>
      </div>
    )
  }
}

ImageCrop.propTypes = {
  selectedFile: PropTypes.string.isRequired,
  crop: PropTypes.shape({
    aspect: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
  }),
}

ImageCrop.defaultProps = {
  crop: undefined,
}

export default ImageCrop
