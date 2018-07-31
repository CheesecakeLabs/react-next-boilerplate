import React, { cloneElement, Children } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Button from '_components/atoms/button'

import styles from './styles.css'

const Dropdown = ({ className, label, disabled, isOpen, children }) => {
  const dropdownClasses = classNames({
    [className]: true,
    [styles.dropdown]: true,
    [styles.disabled]: disabled,
    [styles.dropdownOpen]: isOpen,
  })

  const listClasses = classNames({
    [styles.list]: true,
    [styles.listOpen]: isOpen,
  })

  const openIcon = 'v'

  const list = Children.map(children, child => {
    const itemClasses = classNames(child.className, styles.item)
    return cloneElement(child, { ...child.props, className: itemClasses })
  })

  return (
    <div className={dropdownClasses}>
      <Button>
        {label} {openIcon}
      </Button>
      <nav className={listClasses}>{list}</nav>
    </div>
  )
}

Dropdown.propTypes = {
  className: PropTypes.string,
  label: PropTypes.node,
  disabled: PropTypes.bool,
  isOpen: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

Dropdown.defaultProps = {
  className: undefined,
  label: null,
  disabled: false,
  isOpen: false,
  onClick: () => {},
}

export default Dropdown
