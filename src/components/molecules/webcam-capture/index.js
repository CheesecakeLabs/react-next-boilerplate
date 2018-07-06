import React, { Component } from 'react'
import Webcam from 'react-webcam'
import PropTypes from 'prop-types'

import styles from './styles.css'

class WebcamCapture extends Component {
  setRef = webcam => {
    this.webcam = webcam
  }

  capture = () => {
    const imageSrc = this.webcam.getScreenshot()
    this.props.onImageCapturedFromWebcam(imageSrc)
  }

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: 'user',
    }

    return (
      <div className={styles.webcam_wrapper}>
        <Webcam
          audio={false}
          height={120}
          width={220}
          ref={this.setRef}
          screenshotFormat="image/png"
          videoConstraints={videoConstraints}
        />
        <button onClick={this.capture}>Capture photo</button>
      </div>
    )
  }
}

WebcamCapture.propTypes = {
  onImageCapturedFromWebcam: PropTypes.func.isRequired,
}

export default WebcamCapture
