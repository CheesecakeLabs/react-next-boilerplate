import React from 'react'
import PropTypes from 'prop-types'

import Image from '_atoms/image'
import DialogEditImage from '_molecules/dialog-edit-image'
import Dialog from '_molecules/dialog'
import ErrorMessageList from '_molecules/error-message-list'

const ImageDialog = ({ withCrop, ...props }) => (
  <div>
    {withCrop ? (
      <DialogEditImage invalidProperties={props.invalidProperties} {...props} />
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
  invalidProperties: PropTypes.arrayOf(PropTypes.string),
}

ImageDialog.defaultProps = {
  invalidProperties: [],
}

export default ImageDialog
