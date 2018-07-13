import React from 'react'
import PropTypes from 'prop-types'

import ButtonIcon from '../Button-icon'

import styles from './styles.css'

const Button = ({ onClick, text }) => (
  <button className={styles.button} onClick={onClick}>
    <ButtonIcon text={text} />
    <p className={styles.buttonText}>{text}</p>
  </button>
)

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
}

Button.defaultProps = {
  onClick: () => {},
  text: undefined,
}
export default Button
