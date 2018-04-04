import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Header from '../components/Header'
import './reset.css'

const StyledLayout = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="wasm.today"
      meta={[
        { name: 'description', content: 'Your entry point to WebAssembly scope' },
        { name: 'keywords', content: 'wasm, webassembly, wasmtoday, browsers, nodejs, javascript, frontend' }
      ]}
    />
    <Header />
    <StyledLayout>
      {children()}
    </StyledLayout>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
