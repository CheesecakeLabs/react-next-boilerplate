import PropTypes from 'prop-types'
import React from 'react'

import classes from './styles.css'

const button = props => <button className={classes.Button}>{props.label}</button>

button.propTypes = {
  label: PropTypes.string.isRequired,
}

export default button
