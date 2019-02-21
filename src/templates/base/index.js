import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

import { TITLE } from '_config/settings'
import '_styles/base.css'

const Base = ({ title, children }) => (
  <div>
    <Head>
      <title>{TITLE}{title && ` - ${title}`}</title>
    </Head>
    {children}
  </div>
)

Base.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Base.defaultProps = {
  title: undefined,
}

export default Base
