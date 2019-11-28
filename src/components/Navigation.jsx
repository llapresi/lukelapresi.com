import React from 'react';
import { Link, withPrefix } from 'gatsby';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import styled, { css } from 'react-emotion';
import config from '../../config/website';
import theme from '../../config/theme';
import SocialMediaLinks from './SocialMediaLinks';

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  margin: 0 auto;
  height: ${props => props.theme.toolbar.height};
  background-color: ${props => props.theme.brand.toolbar};
  z-index: 12;
  box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20);
  overflow: hidden;

  a {
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    transition: all 0.333s ease-in-out;
    &:hover {
      color: rgb(8, 126,139);
    }
    &:focus {
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;

const CenterToolbar = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  padding-left: 12px;
  padding-right: 12px;
  max-width:  ${props => props.theme.breakpoints.l};
  margin: 0 auto;
`;

const active = css`
  color: ${theme.brand.primary} !important;
`;

const Name = styled.div`
  a {
    font-size: 23px;
    font-family: ${`${config.headerFontFamily}, sans-serif`};
    &:hover,
    &:focus {
      text-decoration: none;
    }
  }
  font-weight: 700;
  transform: translateY(1px);
  text-transform: uppercase;
  line-height: 1;
`;

const FlexEnd = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

const NavLinks = styled.div`
  padding-left: 16px;
  a {
    padding-left: 4px;
    padding-right: 4px;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    margin-left: auto;
  }
`;

const HideOnMobile = styled.div`
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    display: none;
  }
`;

const Navigation = () => (
  <Wrapper>
    <CenterToolbar>
      <Name>
        <Link to="/">{config.siteTitle}</Link>
      </Name>
      <NavLinks>
        <Link
          to="/"
          activeClassName={css`
            ${active};
          `}
        >
          <span>Projects</span>
        </Link>
        <Link
          to="/about"
          activeClassName={css`
            ${active};
          `}
        >
          <span>About</span>
        </Link>
        <a
          href={withPrefix('/Luke Lapresi Resume.pdf')}
        >
          <span>Resume</span>
        </a>
      </NavLinks>
      <FlexEnd>
        <HideOnMobile>
          <SocialMediaLinks />
        </HideOnMobile>
      </FlexEnd>
    </CenterToolbar>
  </Wrapper>
);

export default Navigation;
