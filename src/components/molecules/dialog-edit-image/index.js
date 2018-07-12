import React from 'react'
import PropTypes from 'prop-types'

import 'react-image-crop/dist/ReactCrop.css'

import ImageCrop from '_molecules/image-crop'
import Dialog from '_molecules/dialog'
import ErrorMessageList from '_molecules/error-message-list'

const DialogEditImage = ({ invalidProperties, selectedFile, crop, ...props }) => (
  <Dialog {...props}>
    <ErrorMessageList errors={invalidProperties} />
    <ImageCrop selectedFile={selectedFile} crop={crop} />
  </Dialog>
)

DialogEditImage.propTypes = {
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

DialogEditImage.defaultProps = {
  invalidProperties: [],
  crop: undefined,
}

export default DialogEditImage
