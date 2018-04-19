// @flow

import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const StyledMenu = styled.div`
  display: flex;
  flex-flow: column;
`;

const StyledMenuElem = styled.div`
  margin-bottom: 5px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
`;

const StyledSeparator = styled.div`
  height: 1px;
  max-width: 50%;
  background: #f3f3f3;
  margin: 5px 0;
`;

const Menu = () => (
  <StyledMenu>
    <StyledMenuElem>
      <StyledLink to='/news'>news</StyledLink>
    </StyledMenuElem>
    <StyledMenuElem>
      <StyledLink to='/tldr'>tl;dr</StyledLink>
    </StyledMenuElem>
    <StyledMenuElem>
      <StyledSeparator />
    </StyledMenuElem>
    <StyledMenuElem>
      <StyledLink to='/why'>why?</StyledLink>
    </StyledMenuElem>
    <StyledMenuElem>
      <StyledLink to='/contact'>contact</StyledLink>
    </StyledMenuElem>
  </StyledMenu>
);

export default Menu;
