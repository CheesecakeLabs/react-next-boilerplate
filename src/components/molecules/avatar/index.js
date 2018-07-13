import React from 'react'
import PropTypes from 'prop-types'

import Image from '_atoms/image'
import profilePlaceholdor from '_images/profile-placeholder.png'

import styles from './styles.css'

const Avatar = ({ image }) => (
  <div className={styles.avatarBackground}>
    <Image image={image} />
  </div>
)

Avatar.propTypes = {
  image: PropTypes.string,
}

Avatar.defaultProps = {
  image: profilePlaceholdor,
}

export default Avatar
