import PropTypes from 'prop-types'
import React from 'react'

import Label from '../../atoms/label'
import Input from '../../atoms/input'

import styles from './styles.css'

const inputWithLabel = props => (
  <div className={styles.inputWithLabel}>
    <Label label={props.label} />
    <Input type={props.type} />
  </div>
)

inputWithLabel.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default inputWithLabel
