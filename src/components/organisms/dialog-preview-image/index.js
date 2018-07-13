import React from 'react'
import PropTypes from 'prop-types'

import 'react-image-crop/dist/ReactCrop.css'

import ImageCrop from '_molecules/image-crop'
import Dialog from '_molecules/dialog'
import Image from '_atoms/image'

const DialogPreviewImage = ({ invalidProperties, selectedFile, crop, withCrop, ...props }) => (
  <Dialog {...props}>
    {withCrop ? (
      <ImageCrop selectedFile={selectedFile} crop={crop} />
    ) : (
      <Image image={selectedFile} />
    )}
  </Dialog>
)

DialogPreviewImage.propTypes = {
  selectedFile: PropTypes.string.isRequired,
  invalidProperties: PropTypes.arrayOf(PropTypes.string),
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
  withCrop: false,
  crop: undefined,
}

export default DialogPreviewImage
