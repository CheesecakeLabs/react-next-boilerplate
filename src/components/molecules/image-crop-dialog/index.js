import React from 'react'
import PropTypes from 'prop-types'

import 'react-image-crop/dist/ReactCrop.css'

import ImageCropper from '_molecules/image-cropper'
import Dialog from '_molecules/dialog'
import ErrorMessageList from '_molecules/error-message-list'

const ImageCropDialog = ({ invalidProperties, selectedFile, crop, ...props }) => (
  <Dialog {...props}>
    <ErrorMessageList errors={invalidProperties} />
    <ImageCropper selectedFile={selectedFile} crop={crop} />
  </Dialog>
)

ImageCropDialog.propTypes = {
  selectedFile: PropTypes.string.isRequired,
  invalidProperties: PropTypes.arrayOf(PropTypes.string),
  crop: PropTypes.shape({
    aspect: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
  }),
}

ImageCropDialog.defaultProps = {
  invalidProperties: [],
  crop: undefined,
}

export default ImageCropDialog
