import React, { Component } from 'react'
import PropTypes from 'prop-types'

import 'react-image-crop/dist/ReactCrop.css'

import ImageCrop from '_molecules/image-crop'
import Dialog from '_molecules/dialog'
import Image from '_atoms/image'
import Button from '_atoms/button'

import styles from './styles.css'

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
        <div className={styles.content}>
          {withCrop ? (
            <ImageCrop selectedFile={selectedFile} crop={crop} onImageCropped={this.setNewImage} />
          ) : (
            <Image className={styles.imagePreview} src={selectedFile} alt="profile preview" />
          )}
          <Button onClick={() => onContinueClick(newImage)}>Save</Button>
        </div>
      </Dialog>
    )
  }
}

DialogPreviewImage.propTypes = {
  isOpen: PropTypes.bool,
  withCrop: PropTypes.bool,
  title: PropTypes.string,
  selectedFile: PropTypes.string,
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
  selectedFile: undefined,
  onCancelClick: () => {},
  onContinueClick: () => {},
}

export default DialogPreviewImage
