import React, { cloneElement, Children } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Button from '_components/atoms/button'

import styles from './styles.css'

const Dropdown = ({ className, button, disabled, isOpen, children, handleClick }) => {
  const dropdownClasses = classNames({
    [className]: true,
    [styles.dropdown]: true,
    [styles.disabled]: disabled,
  })

  const buttonClasses = classNames({
    [styles.button]: true,
    [styles.buttonOpen]: isOpen,
  })

  const listClasses = classNames({
    [styles.list]: true,
    [styles.listOpen]: isOpen,
  })

  const list = Children.map(children, child => {
    const itemClasses = classNames(child.className, styles.item)
    return cloneElement(child, { ...child.props, className: itemClasses })
  })

  return (
    <div className={dropdownClasses}>
      <Button className={buttonClasses} onClick={handleClick}>
        {button}
      </Button>
      <nav className={listClasses}>{list}</nav>
    </div>
  )
}

Dropdown.propTypes = {
  className: PropTypes.string,
  button: PropTypes.node,
  disabled: PropTypes.bool,
  isOpen: PropTypes.bool,
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func,
}

Dropdown.defaultProps = {
  className: undefined,
  button: null,
  disabled: false,
  isOpen: false,
  handleClick: () => {},
}

export default Dropdown
