import PropTypes from 'prop-types'
import React from 'react'
import classNames from 'classnames'

import Input from '_components/atoms/input'

import styles from './styles.css'

const Checkbox = props => {
  const { className, isChecked } = props
  const inputClasses = classNames({
    [className]: true,
    [styles.input]: true,
    [styles.checked]: isChecked,
  })

  return (
    <label className={styles.checkbox} role="checkbox" aria-checked={isChecked}>
      <Input {...props} type="checkbox" className={inputClasses} checked={isChecked} />
    </label>
  )
}

Checkbox.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
}

Checkbox.defaultProps = {
  className: undefined,
  id: null,
  isChecked: false,
}

export default Checkbox