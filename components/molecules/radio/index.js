import PropTypes from 'prop-types'
import React from 'react'
import classNames from 'classnames'

import Input from '_components/atoms/input'

import styles from './styles.css'

const Radio = props => {
  const { className, isChecked, disabled } = props
  const inputClasses = classNames({
    [className]: true,
    [styles.input]: true,
    [styles.checked]: isChecked,
    [styles.disabled]: disabled,
  })

  return (
    <label className={styles.radio} role="radio" aria-checked={isChecked}>
      <Input {...props} type="radio" className={inputClasses} checked={isChecked} />
    </label>
  )
}

Radio.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  isChecked: PropTypes.bool,
  disabled: PropTypes.bool,
}

Radio.defaultProps = {
  className: undefined,
  id: null,
  isChecked: false,
  disabled: false,
}

export default Radio
