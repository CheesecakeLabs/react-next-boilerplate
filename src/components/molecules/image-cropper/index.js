import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactCrop, { makeAspectCrop } from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

class ImageCropper extends Component {
  state = {
    crop: {},
  }

  onImageLoaded = image => {
    this.setState({
      crop: makeAspectCrop(
        {
          ...this.props.crop,
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
  crop: PropTypes.shape({
    aspect: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
  }),
}

ImageCropper.defaultProps = {
  crop: undefined,
}

export default ImageCropper
