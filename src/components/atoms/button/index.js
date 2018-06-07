import PropTypes from 'prop-types'
import React from 'react'
import Link from 'next/link'

import styles from './styles.css'

const button = props => (
  <Link href={props.link}>
    <button className={styles.button} onClick={props.action}>
      {props.label}
    </button>
  </Link>
)

button.propTypes = {
  label: PropTypes.string.isRequired,
  action: PropTypes.func,
  link: PropTypes.string,
}

button.defaultProps = {
  action: null,
  link: '',
}

export default button
