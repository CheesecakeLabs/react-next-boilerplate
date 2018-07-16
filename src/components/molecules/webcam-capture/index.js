import React, { Component } from 'react'
import Webcam from 'react-webcam'
import PropTypes from 'prop-types'

import Button from '_atoms/button'

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
    const { height, width, scrennshotFormat, videoConstraints } = this.props.userMedia
    return (
      <div className={styles.webcamContainer}>
        <Webcam
          audio={false}
          height={height}
          width={width}
          ref={this.setRef}
          screenshotFormat={scrennshotFormat}
          videoConstraints={videoConstraints}
        />
        <Button onClick={this.capture}>Capture</Button>
      </div>
    )
  }
}

WebcamCapture.propTypes = {
  onImageCapturedFromWebcam: PropTypes.func.isRequired,
  userMedia: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
    scrennshotFormat: PropTypes.string,
    videoConstraints: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
      facingMode: PropTypes.string,
    }),
  }),
}

WebcamCapture.defaultProps = {
  userMedia: {
    height: 120,
    width: 220,
    format: 'image/png',
    videoConstraints: {
      width: 1280,
      height: 720,
      facingMode: 'user',
    },
  },
}

export default WebcamCapture
