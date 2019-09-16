import React from 'react';
import Helmet from 'react-helmet';
import { Header, Container } from 'components';
import config from '../../config/website';
import face from './face.png';

const About = () => (
  <React.Fragment>
    <Helmet title={`About | ${config.siteTitle}`} />
    <Header>About</Header>
    <Container type="text">
      <h1>Luke Lapresi is...</h1>
      <div>
        <p>
          a full-stack developer and a creator of experiences small, large, serious, playful,
          productivity-enhancing and productivity-destroying.
          I've worked with many technologies and platforms including C#, Swift, Unity, ASP.n
          Bootstrap, JavaScript, Node, Anuglar, Webpack, React, Python and more.
        </p>
        <p>
          I am currently in the Rochester/Buffalo NY area looking for full-time employement.
          I graduated in May 2019 from the Rochester Institute of Technology with a Bachelors of
          Science, New Media Interactive Development.
        </p>
        <img src={face} style={{ width: '40%', display: 'block', margin: '0 auto ' }} alt="Luke Lapresi's face" />
      </div>
    </Container>
  </React.Fragment>
);

export default About;
