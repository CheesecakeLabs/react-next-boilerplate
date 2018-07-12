import React from 'react'
import PropTypes from 'prop-types'

import WebcamCapture from '_molecules/webcam-capture'
import Dialog from '_molecules/dialog'
import ErrorMessageList from '_molecules/error-message-list'

const DialogCaptureImage = ({
  fileSelectedHandler,
  accept,
  userMediaEnabled,
  invalidProperties,
  ...props
}) => {
  return (
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
        {userMediaEnabled && (
          <WebcamCapture onImageCapturedFromWebcam={this.onImageSelectedOrCaptured} />
        )}
        <button onClick={() => this.fileInput.click()}>Choose image from computer</button>
      </div>
    </Dialog>
  )
}

DialogCaptureImage.propTypes = {
  fileSelectedHandler: PropTypes.func.isRequired,
  accept: PropTypes.string.isRequired,
  userMediaEnabled: PropTypes.bool.isRequired,
  invalidProperties: PropTypes.arrayOf(PropTypes.string),
}

DialogCaptureImage.defaultProps = {
  invalidProperties: [],
}

export default DialogCaptureImage
