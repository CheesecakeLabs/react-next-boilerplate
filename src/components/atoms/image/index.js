import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const Image = ({ image }) => <img className={styles.image} src={image} alt={'preview'} />

Image.propTypes = {
  image: PropTypes.string.isRequired,
}

export default Image
