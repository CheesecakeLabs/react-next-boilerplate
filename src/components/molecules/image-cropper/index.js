import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactCrop, { makeAspectCrop } from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

class ImageCropper extends Component {
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
    return (
      <ReactCrop
        src={this.props.selectedFile}
        crop={this.state.crop}
        onImageLoaded={this.onImageLoaded}
        onComplete={this.onCropComplete}
        onChange={this.onCropChange}
        keepSelection
      />
    )
  }
}

ImageCropper.propTypes = {
  selectedFile: PropTypes.string.isRequired,
}

export default ImageCropper
