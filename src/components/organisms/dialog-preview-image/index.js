import React, { Component } from 'react'
import PropTypes from 'prop-types'

import 'react-image-crop/dist/ReactCrop.css'

import ImageCrop from '_molecules/image-crop'
import Dialog from '_molecules/dialog'
import Image from '_atoms/image'
import Button from '_atoms/button'

class DialogPreviewImage extends Component {
  state = {
    newImage: this.props.selectedFile,
  }

  setNewImage = image => {
    this.setState({ newImage: image })
  }

  render() {
    const { newImage } = this.state
    const {
      invalidProperties,
      selectedFile,
      crop,
      withCrop,
      onContinueClick,
      ...props
    } = this.props
    return (
      <Dialog {...props}>
        {withCrop ? (
          <ImageCrop selectedFile={selectedFile} crop={crop} onImageCropped={this.setNewImage} />
        ) : (
          <Image image={selectedFile} />
        )}
        <Button text="Save" onClick={() => onContinueClick(newImage)} />
      </Dialog>
    )
  }
}

DialogPreviewImage.propTypes = {
  selectedFile: PropTypes.string.isRequired,
  invalidProperties: PropTypes.arrayOf(PropTypes.string),
  onContinueClick: PropTypes.func,
  withCrop: PropTypes.bool,
  crop: PropTypes.shape({
    aspect: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
  }),
}

DialogPreviewImage.defaultProps = {
  invalidProperties: [],
  onContinueClick: () => {},
  withCrop: false,
  crop: undefined,
}

export default DialogPreviewImage
