import React from 'react';
import styled from 'react-emotion';

const GoldenRatio = styled.div`
  position: relative;
  &:before {
    content: '';
    display: block;
    padding-top: ${props => props.theme.homepagetiles.ratio};
  }
`;

export default GoldenRatio;
