import React, { Component } from 'react'

class ImageUpload extends Component {
  state = {
    selectedFile: null,
  }
  fileSelectedHandler = event => {
    console.log(event.target.files[0])
    this.setState({
      selectedFile: event.target.files[0],
    })
  }

  fileUploadHandler = () => {
    //Add endpoint to upload image here
  }

  render() {
    return (
      <div>
        <input
          style={{ display: 'none' }}
          type="file"
          onChange={this.fileSelectedHandler}
          ref={fileInput => (this.fileInput = fileInput)}
        />
        <button onClick={() => this.fileInput.click()}>Pick File</button>
        {/* <button onClick={this.fileUploadHandler}>Upload your Image</button> */}
      </div>
    )
  }
}

export default ImageUpload
