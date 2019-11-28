import React from 'react';
import styled from 'react-emotion';
import config from '../../config/website';
import SocialMediaLinks from './SocialMediaLinks';

const Wrapper = styled.footer`
  margin: 5rem 0;
  padding: 1rem ${props => props.theme.spacer.horizontal};
  padding-bottom: 3rem;
  text-align: center;
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.link_color};
    : hover {
      color: ${props => props.theme.colors.link_color_hover};
    }
  }
`;

const Footer = () => (
  <Wrapper>
    <SocialMediaLinks />
    <span>Copyright &copy; 2018. All right reserved.</span>
    <br />
    <span>Powered by </span>
    <a href="https://www.gatsbyjs.org/">Gatsby.js. </a>
  </Wrapper>
);

export default Footer;
