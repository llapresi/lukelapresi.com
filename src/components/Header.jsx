import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Wrapper = styled.div`
  background: ${props => props.theme.brand.secondary};
  color: #fff;
  padding: 8rem ${props => props.theme.spacer.horizontal};
  margin-bottom: -4rem;
  text-align: center;
`;

const Header = ({ children }) => (
  <Wrapper>
    <h1>{children}</h1>
  </Wrapper>
);

export default Header;

Header.propTypes = {
  children: PropTypes.node.isRequired,
};
