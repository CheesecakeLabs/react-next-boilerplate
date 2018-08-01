import React from 'react'
import PropTypes from 'prop-types'

import Section from './section'
import styles from './styles.css'

const Accordion = ({ children }) => <div className={styles.accordion}>{children}</div>
Accordion.Section = Section

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
}

Accordion.defaultProps = {
  isOpen: false,
  className: undefined,
  onClick: () => {},
}
export default Accordion
