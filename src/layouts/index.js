// @flow

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from '../components/Header';
import Menu from '../components/Menu';
import Promo from '../components/Promo';
import Footer from '../components/Footer';

import './reset.css';

type Props = {
  children: Function
}

const StyledLayout = styled.div`
  display: flex;
  flex-flow: column;
  height: 100vh;
  padding: 20px;
`;

const StyledHeader = styled.header`
  flex: 0 0;
  order: 1;
  padding-bottom: 30px;
`;

const StyledMainContent = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 1 0 auto;
  order: 2;
`;

const StyledMenu = styled.aside`
  flex: 0 0 150px;
  order: 1;
`;

const StyledArticle = styled.article`
  flex: 1;
  order: 2;
`;

const StyledPromo = styled.aside`
  flex: 0 0 300px;
  order: 3;
`;

const StyledFooter = styled.footer`
  flex: 0 0;
  order: 3;
  padding-top: 30px;
`;

const TemplateWrapper = ({children}: Props) => (
  <div>
    <Helmet
      title="wasm.today"
      meta={[
        { name: 'description', content: 'Your entry point to WebAssembly scope' },
        { name: 'keywords', content: 'wasm, webassembly, wasmtoday, browsers, nodejs, javascript, frontend' }
      ]}
    />
    <StyledLayout>
      <StyledHeader>
        <Header />
      </StyledHeader>
      <StyledMainContent>
        <StyledMenu>
          <Menu />
        </StyledMenu>
        <StyledArticle>
          {children()}
        </StyledArticle>
        <StyledPromo>
          <Promo />
        </StyledPromo>
      </StyledMainContent>
      <StyledFooter>
        <Footer />
      </StyledFooter>
    </StyledLayout>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
