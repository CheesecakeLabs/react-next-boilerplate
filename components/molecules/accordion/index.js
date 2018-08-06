import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Section from './section'
import styles from './styles.css'

const Accordion = ({ children, className }) => (
  <div className={classnames(styles.accordion, className)}>{children}</div>
)

Accordion.Section = Section

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Accordion.defaultProps = {
  className: undefined,
}

export default Accordion
