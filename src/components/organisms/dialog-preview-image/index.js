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
      isOpen,
      title,
      onCancelClick,
      selectedFile,
      crop,
      withCrop,
      onContinueClick,
    } = this.props
    return (
      <Dialog isOpen={isOpen} title={title} onCancelClick={onCancelClick}>
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
  isOpen: PropTypes.bool,
  withCrop: PropTypes.bool,
  title: PropTypes.string,
  selectedFile: PropTypes.string.isRequired,
  onCancelClick: PropTypes.func,
  onContinueClick: PropTypes.func,
  crop: PropTypes.shape({
    aspect: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
  }),
}

DialogPreviewImage.defaultProps = {
  isOpen: false,
  withCrop: false,
  crop: undefined,
  title: undefined,
  onCancelClick: () => {},
  onContinueClick: () => {},
}

export default DialogPreviewImage
