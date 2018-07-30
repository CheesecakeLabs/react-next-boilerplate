import PropTypes from 'prop-types'
import React from 'react'
import classNames from 'classnames'

import Input from '_components/atoms/input'

import styles from './styles.css'

const Radio = props => {
  const { className, checked, disabled } = props
  const inputClasses = classNames({
    [className]: true,
    [styles.input]: true,
    [styles.checked]: checked,
    [styles.disabled]: disabled,
  })

  return (
    <label className={styles.radio} role="radio" aria-checked={checked}>
      <Input {...props} type="radio" className={inputClasses} />
    </label>
  )
}

Radio.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
}

Radio.defaultProps = {
  className: undefined,
  id: null,
  checked: false,
  disabled: false,
}

export default Radio
