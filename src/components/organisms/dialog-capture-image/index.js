import React from 'react'
import PropTypes from 'prop-types'

import WebcamCapture from '_molecules/webcam-capture'
import Dialog from '_molecules/dialog'
import ErrorMessageList from '_molecules/error-message-list'
import ErrorMessage from '_atoms/error-message'
import Button from '_atoms/button'

const DialogCaptureImage = ({
  isOpen,
  title,
  onCancelClick,
  fileSelectedHandler,
  accept,
  userMediaEnabled,
  invalidProperties,
  onImageSelected,
  userMedia,
}) => (
  <Dialog isOpen={isOpen} title={title} onCancelClick={onCancelClick}>
    <ErrorMessageList>
      {invalidProperties.map((error, index) => (
        <ErrorMessage key={index.toString()}>{error}</ErrorMessage>
      ))}
    </ErrorMessageList>
    <input
      style={{ display: 'none' }}
      type="file"
      onChange={fileSelectedHandler}
      accept={accept}
      ref={fileInput => (this.fileInput = fileInput)}
      multiple={false}
    />
    <div>
      {userMediaEnabled && (
        <WebcamCapture onImageCaptured={onImageSelected} userMedia={userMedia} />
      )}
      <Button onClick={() => this.fileInput.click()}>Upload photo</Button>
    </div>
  </Dialog>
)

DialogCaptureImage.propTypes = {
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

DialogCaptureImage.defaultProps = {
  isOpen: false,
  title: undefined,
  invalidProperties: [],
  userMedia: undefined,
  onCancelClick: () => {},
  onImageSelected: () => {},
}

export default DialogCaptureImage
