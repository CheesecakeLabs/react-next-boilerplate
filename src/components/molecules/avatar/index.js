import React from 'react'
import PropTypes from 'prop-types'

import Image from '_atoms/image'
import profilePlaceholdor from '_images/profile-placeholder.png'

import styles from './styles.css'

const Avatar = ({ className, avatarURL }) => (
  <div className={styles.avatarBackground}>
    <Image src={avatarURL} className={className} alt="profile image" />
  </div>
)

Avatar.propTypes = {
  avatarURL: PropTypes.string,
  className: PropTypes.string,
}

Avatar.defaultProps = {
  avatarURL: profilePlaceholdor,
  className: undefined,
}

export default Avatar
