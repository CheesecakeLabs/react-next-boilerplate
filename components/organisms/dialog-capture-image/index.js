import React, { Component } from 'react'
import PropTypes from 'prop-types'

import WebcamCapture from '_components/molecules/webcam-capture'
import Dialog from '_components/molecules/dialog'
import Helper from '_components/atoms/helper'
import Button from '_components/atoms/button'

import styles from './styles.css'

class DialogCaptureImage extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    title: PropTypes.string,
    onCancelClick: PropTypes.func,
    fileSelectedHandler: PropTypes.func.isRequired,
    accept: PropTypes.string.isRequired,
    userMediaEnabled: PropTypes.bool.isRequired,
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
    invalidProperties: PropTypes.arrayOf(PropTypes.string),
    onImageSelected: PropTypes.func,
  }

  static defaultProps = {
    isOpen: false,
    title: undefined,
    invalidProperties: [],
    userMedia: undefined,
    onCancelClick: () => {},
    onImageSelected: () => {},
  }

  render() {
    const {
      isOpen,
      title,
      onCancelClick,
      fileSelectedHandler,
      accept,
      userMediaEnabled,
      invalidProperties,
      onImageSelected,
      userMedia,
    } = this.props
    return (
      <Dialog isOpen={isOpen} title={title} onCancelClick={onCancelClick}>
        <div>
          {invalidProperties.map((error, index) => (
            <Helper key={index.toString()} type="error">
              {error}
            </Helper>
          ))}
        </div>
        <input
          style={{ display: 'none' }}
          type="file"
          onChange={fileSelectedHandler}
          accept={accept}
          ref={fileInput => {
            this.fileInput = fileInput
          }}
          multiple={false}
        />
        <div>
          {userMediaEnabled && (
            <WebcamCapture onImageCaptured={onImageSelected} userMedia={userMedia} />
          )}
          <Button onClick={() => this.fileInput.click()} className={styles.uploadButton}>
            Upload photo
          </Button>
        </div>
      </Dialog>
    )
  }
}

export default DialogCaptureImage
