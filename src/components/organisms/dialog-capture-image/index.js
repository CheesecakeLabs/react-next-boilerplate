import React from 'react'
import PropTypes from 'prop-types'

import WebcamCapture from '_molecules/webcam-capture'
import Dialog from '_molecules/dialog'
import ErrorMessageList from '_molecules/error-message-list'
import Button from '_atoms/button'

const DialogCaptureImage = ({
  isOpen,
  title,
  onCancelClick,
  fileSelectedHandler,
  accept,
  userMediaEnabled,
  invalidProperties,
  onImageSelectedOrCaptured,
  userMedia,
}) => (
  <Dialog isOpen={isOpen} title={title} onCancelClick={onCancelClick}>
    <ErrorMessageList errors={invalidProperties} />
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
        <WebcamCapture
          onImageCapturedFromWebcam={onImageSelectedOrCaptured}
          userMedia={userMedia}
        />
      )}
      <Button text="Upload photo" onClick={() => this.fileInput.click()} />
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
  onImageSelectedOrCaptured: PropTypes.func,
}

DialogCaptureImage.defaultProps = {
  isOpen: false,
  title: undefined,
  invalidProperties: [],
  userMedia: undefined,
  onCancelClick: () => {},
  onImageSelectedOrCaptured: () => {},
}

export default DialogCaptureImage
