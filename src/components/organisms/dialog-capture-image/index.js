import React from 'react'
import PropTypes from 'prop-types'

import WebcamCapture from '_molecules/webcam-capture'
import Dialog from '_molecules/dialog'
import ErrorMessageList from '_molecules/error-message-list'
import Button from '_atoms/button'

const DialogCaptureImage = ({
  fileSelectedHandler,
  accept,
  userMediaEnabled,
  invalidProperties,
  onImageSelectedOrCaptured,
  ...props
}) => (
  <Dialog {...props}>
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
      {userMediaEnabled && <WebcamCapture onImageCapturedFromWebcam={onImageSelectedOrCaptured} />}
      <Button text="Upload photo" onClick={() => this.fileInput.click()} />
    </div>
  </Dialog>
)

DialogCaptureImage.propTypes = {
  fileSelectedHandler: PropTypes.func.isRequired,
  accept: PropTypes.string.isRequired,
  userMediaEnabled: PropTypes.bool.isRequired,
  invalidProperties: PropTypes.arrayOf(PropTypes.string),
  onImageSelectedOrCaptured: PropTypes.func,
}

DialogCaptureImage.defaultProps = {
  invalidProperties: [],
  onImageSelectedOrCaptured: () => {},
}

export default DialogCaptureImage
