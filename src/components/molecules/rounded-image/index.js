import React from 'react'
import PropTypes from 'prop-types'

import Image from '_atoms/image'
import profilePlaceholdor from '_images/profile-placeholder.png'

import styles from './styles.css'

const RoundedImage = ({ image }) => (
  <div className={styles.profileImage}>
    <Image image={image} />
  </div>
)

RoundedImage.propTypes = {
  image: PropTypes.string,
}

RoundedImage.defaultProps = {
  image: profilePlaceholdor,
}

export default RoundedImage
