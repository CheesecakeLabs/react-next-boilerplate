import React, { Component } from 'react'
import PropTypes from 'prop-types'

class EditImage extends Component {
  updateImage = () => {
    console.log('CHANGE IMAGE')
  }

  render() {
    const { children, acceptFile, fileSelectedHandler } = this.props
    return (
      <div>
        <input
          style={{ display: 'none' }}
          type="file"
          onChange={fileSelectedHandler}
          accept={acceptFile}
          ref={fileInput => (this.fileInput = fileInput)}
          multiple={false}
        />
        <div onClick={() => this.fileInput.click()}>{children}</div>
      </div>
    )
  }
}

EditImage.propTypes = {
  children: PropTypes.node.isRequired,
  fileSelectedHandler: PropTypes.func.isRequired,
  acceptFile: PropTypes.string,
}

EditImage.defaultProps = {
  acceptFile: 'image/*',
}

export default EditImage
