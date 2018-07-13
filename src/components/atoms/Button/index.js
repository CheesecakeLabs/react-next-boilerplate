import React from 'react'

import loginIcon from './login-icon.svg'
import styles from './styles.css'

function Button(props) {
  return (
    <button className="button" onClick={props.onclick}>
      <img className="buttonIcon" src={loginIcon} alt="button-icon" />
      <p className="buttonText">{props.text}</p>
    </button>
  )
}

export default Button
