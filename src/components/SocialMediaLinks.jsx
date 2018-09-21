import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import styled from 'react-emotion';
import config from '../../config/website';

const SocialMedia = styled.div`
  a {
    font-size: 1.25rem;
    line-height: 20px;
  }
  a:not(:first-child) {
    margin-left: 1rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    display: none;
  }
`;

const SocialMediaLinks = () => (
  <SocialMedia>
    <a href={config.linkedinUrl} target="_blank" rel="noopener noreferrer">
      <FaLinkedin />
    </a>
    <a href={config.githubUrl} target="_blank" rel="noopener noreferrer">
      <FaGithub />
    </a>
    <a href={config.emailAddress} target="_blank" rel="noopener noreferrer">
      <FaEnvelope />
    </a>
  </SocialMedia>
)

export default SocialMediaLinks;