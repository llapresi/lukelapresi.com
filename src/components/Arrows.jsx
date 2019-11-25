
import React from 'react';
import styled from 'react-emotion';
import { keyframes } from 'emotion';

const fade = keyframes`
  from, 0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  90% {
    opacity: 0;
  }

  99% {
    opacity: 0;
  }
`;


// Default arrow rotation is left
const Arrow = styled.i`
  border: solid white;
  border-width: 0 4px 4px 0;
  display: inline-block;
  padding: 8px;
  transform: rotate(-45deg);

  animation: ${fade} 0.9s cubic-bezier(0.645, 0.045, 0.355, 1) infinite;
  animation-delay: ${props => props.delay}s;
`;

const ArrowGroup = styled.div`
  display: flex;
`;

export { Arrow, ArrowGroup };
