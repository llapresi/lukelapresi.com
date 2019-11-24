import React from 'react';
import styled from 'react-emotion';
import CutCorner from '../CutCorner';


const ProjectHeader = styled(CutCorner)`
  height: ${props => props.theme.homepagetiles.titleHeight};
  will-change: background-position;
  padding: 0.6rem;
  padding-bottom: 0.65rem;
  transition: background-position 120ms;
  transition-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
`;

const ProjectTitle = styled.h2`
  text-transform: uppercase;
  margin-bottom: -4px;
  font-weight: 700 !important;
  font-size:  1.4em;
  color: #fff;
  text-decoration: none;
`;

const ProjectType = styled.div`
  margin-top: 0px;
  font-size:  1.2em;    
  color: #fff;
  margin-bottom: -4px;
  text-decoration: none;
`;

export { ProjectHeader, ProjectTitle, ProjectType };
