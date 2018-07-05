import React from 'react'
import PropTypes from 'prop-types'

import Image from '_atoms/image'
import ImageCropDialog from '_molecules/image-crop-dialog'
import Dialog from '_molecules/dialog'
import ErrorMessageList from '_molecules/error-message-list'

const ImageDialog = ({ withCrop, ...props }) => (
  <div>
    {withCrop ? (
      <ImageCropDialog invalidProperties={props.invalidProperties} {...props} />
    ) : (
      <Dialog {...props}>
        <ErrorMessageList errors={props.invalidProperties} />
        <Image image={props.selectedFile} />
      </Dialog>
    )}
  </div>
)

ImageDialog.propTypes = {
  withCrop: PropTypes.bool.isRequired,
  selectedFile: PropTypes.string.isRequired,
  invalidProperties: PropTypes.arrayOf.string,
}

ImageDialog.defaultProps = {
  invalidProperties: [],
}

export default ImageDialog
