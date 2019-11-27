import React from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import { Header, Container } from 'components';
import config from '../../config/website';
import face from './face.jpg';

const FloatLeft = styled.img`
  @media (min-width: ${props => props.theme.breakpoints.s}) {
    float: left;
    width: 300px;
    padding-right: 16px;
  }
`;

const About = () => (
  <React.Fragment>
    <Helmet title={`About | ${config.siteTitle}`} />
    <Header>About</Header>
    <Container type="text">
      <h1>Luke Lapresi is...</h1>
      <FloatLeft src={face} alt="Luke Lapresi's face"  />
      <p>
        a full-stack developer and a creator of experiences small, large, serious, playful,
        productivity-enhancing and productivity-destroying.
        I've worked with many technologies and platforms including C#, Swift, Unity, ASP.Net
        Bootstrap, JavaScript, Node, Anuglar, Webpack, React, Python and more.
      </p>
      <p>
        I am currently in the Rochester/Buffalo NY area looking for full-time employement.
        I graduated in May 2019 from the Rochester Institute of Technology with a Bachelors of
        Science, New Media Interactive Development.
      </p>
    </Container>
  </React.Fragment>
);

export default About;
