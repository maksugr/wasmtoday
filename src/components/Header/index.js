// @flow

import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const StyledHeader = styled.div`
  text-align: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

const Header = () => (
  <StyledHeader>
    <StyledLink to='/'>wasm.today</StyledLink>
  </StyledHeader>
);

export default Header;
