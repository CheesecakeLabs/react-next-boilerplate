import React from 'react'
import PropTypes from 'prop-types'

const Image = ({ image }) => <img src={image} alt={'preview'} />

Image.propTypes = {
  image: PropTypes.string.isRequired,
}

export default Image
