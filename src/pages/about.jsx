import React from 'react';
import Helmet from 'react-helmet';
import { Header, Container } from 'components';
import config from '../../config/website';
import face from './face.jpg';

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
          I've worked with many technologies and platforms including C#, Swift, Unity,
          Bootstrap, JavaScript/Node, Webpack, React, Python and more. I am currently
          in my senior year as a New Media Interactive Development
          student at the Rochester Institute of Technology, and will be graduating in June 2019.
        </p>
        <img src={face} style={{ width: '40%', display: 'block', margin: '0 auto ' }} alt="Luke Lapresi's face" />
      </div>
    </Container>
  </React.Fragment>
);

export default About;
