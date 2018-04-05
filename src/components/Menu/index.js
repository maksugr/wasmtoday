// @flow

import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const StyledMenu = styled.div`
  display: flex;
  flex-flow: column;
`;

const StyledLink = styled(Link)`
  margin-bottom: 5px;
  color: #000;
  text-decoration: none;
`;

const Menu = () => (
  <StyledMenu>
    <StyledLink to='/'>Menu</StyledLink>
    <StyledLink to='/'>Menu</StyledLink>
    <StyledLink to='/'>Menu</StyledLink>
  </StyledMenu>
);

export default Menu;
