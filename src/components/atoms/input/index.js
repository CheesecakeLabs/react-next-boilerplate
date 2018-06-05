import PropTypes from 'prop-types'
import React from 'react'

import classes from './styles.css'

const input = props => <input className={classes.Input} type={props.type} />

input.propTypes = {
  type: PropTypes.string.isRequired,
}

export default input
