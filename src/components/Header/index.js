// @flow

import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const StyledHeaderOuterWrapper = styled.div`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`;

const StyledHeaderInnerWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

const StyledH1 = styled.h1`
  margin: 0;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Header = () => (
  <StyledHeaderOuterWrapper>
    <StyledHeaderInnerWrapper>
      <StyledH1>
        <StyledLink to='/'>
          wasm.today
        </StyledLink>
      </StyledH1>
    </StyledHeaderInnerWrapper>
  </StyledHeaderOuterWrapper>
);

export default Header;
