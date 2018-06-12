import PropTypes from 'prop-types'
import React from 'react'

import Label from '../../atoms/label'
import Input from '../../atoms/input'

import styles from './styles.css'

const TextFieldGroup = ({ label, type, changed, value }) => (
  <div className={styles.textFieldGroup}>
    <Label label={label} />
    <Input type={type} onChange={changed} value={value} />
  </div>
)

TextFieldGroup.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default TextFieldGroup
