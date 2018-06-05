import PropTypes from 'prop-types'
import React from 'react'

import Label from '../../atoms/label'
import Input from '../../atoms/input'

import classes from './styles.css'

const inputWithLabel = props => (
  <div className={classes.InputWithLabel}>
    <Label label={props.label} />
    <Input type={props.type} />
  </div>
)

inputWithLabel.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default inputWithLabel
