import PropTypes from 'prop-types'
import React from 'react'

import Label from '../../atoms/label'
import Input from '../../atoms/input'

import styles from './styles.css'

const inputWithLabel = ({ label, type, changed, value }) => (
  <div className={styles.inputWithLabel}>
    <Label label={label} />
    <Input type={type} onChange={changed} value={value} />
  </div>
)

inputWithLabel.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default inputWithLabel
