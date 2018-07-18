import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactCrop, { makeAspectCrop, getPixelCrop } from 'react-image-crop'
import classNames from 'classnames'
import 'react-image-crop/dist/ReactCrop.css'

import styles from './styles.css'

const SHAPES = {
  circle: styles.circle,
  square: styles.square,
}

class ImageCrop extends Component {
  state = {
    crop: {},
    pixelCrop: {},
    originalImage: null,
  }

  onImageLoaded = image => {
    let { cropShape, crop } = this.props
    //when the shape is a circle the aspect should be 1
    if (cropShape === 'circle') {
      crop = { ...crop, aspect: 1 }
    }
    const cropProperties = makeAspectCrop(
      {
        ...crop,
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

  onCropComplete = (crop, pixelCrop) => {
    this.setState({ crop, pixelCrop })
    this.getCroppedImage()
  }

  onCropChange = (crop, pixelCrop) => {
    this.setState({ crop, pixelCrop })
  }

  getCroppedImage = () => {
    const { pixelCrop, originalImage } = this.state
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
    this.props.onImageCropped(base64Image)
  }

  render() {
    const { cropShape } = this.props
    return (
      <div>
        <div className={classNames(styles.container, SHAPES[cropShape])}>
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
  selectedFile: PropTypes.string,
  onImageCropped: PropTypes.func,
  crop: PropTypes.shape({
    aspect: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  cropShape: PropTypes.oneOf(['circle', 'square']),
}

ImageCrop.defaultProps = {
  selectedFile: undefined,
  crop: undefined,
  onImageCropped: undefined,
  cropShape: 'square',
}

export default ImageCrop
