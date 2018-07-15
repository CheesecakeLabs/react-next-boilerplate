import React from 'react'
import PropTypes from 'prop-types'

import Image from '_atoms/image'
import profilePlaceholdor from '_images/profile-placeholder.png'

import styles from './styles.css'

const Avatar = ({ className, image }) => (
  <div className={styles.avatarBackground}>
    <Image image={image} className={className} />
  </div>
)

Avatar.propTypes = {
  image: PropTypes.string,
  className: PropTypes.string,
}

Avatar.defaultProps = {
  image: profilePlaceholdor,
  className: undefined,
}

export default Avatar
