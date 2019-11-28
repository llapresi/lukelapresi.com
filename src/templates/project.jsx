import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { Container, SEO, Layout } from 'components';
import sample from 'lodash/sample';
import Img from 'gatsby-image';
import config from '../../config/website';
import { overlay } from '../../config/theme';

const overlayColor = sample(overlay);

const Wrapper = styled.section`
  text-align: center;
  position: relative;
  width: 100%;
  color: white;
  padding: 8rem ${props => props.theme.spacer.horizontal};
  margin-bottom: -4rem;
  z-index: -1;
  box-shadow: inset 0px -50px 50px -50px rgba(0,0,0,0.6);
  
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    padding-top: 3rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 5.9rem;
  }

  overflow: hidden;
`;

const WrapperImage = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  z-index: -1;

  /* Hack because edge doesn't support 'image-rendering' yet */
  @supports (-ms-ime-align: auto) {
    filter: blur(12px);
    transform: scale3d(1.07, 1.07, 1);
  }

  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
`;

const InformationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${props => props.theme.spacer.vertical} ${props => props.theme.spacer.horizontal} 0
    ${props => props.theme.spacer.horizontal};

  @media (max-width: ${props => props.theme.breakpoints.s}) {
    margin: 1rem 1rem 0 1rem;
  }
`;

const Top = styled.div`
  font-size: 80%;
  margin-bottom: -.2rem;
  position: relative;
  text-transform: uppercase;
`;

const Bottom = styled.div`
  font-size: 125%;
`;

const Header = styled.h1`
  margin-top: -2rem;
  margin-bottom: 1rem;
`;

const Project = ({ pageContext: { slug }, data: { markdownRemark: postNode } }) => {
  const project = postNode.frontmatter;
  return (
    <React.Fragment>
      <Helmet title={`${project.title} | ${config.siteTitle}`} />
      <SEO postPath={slug} postNode={postNode} postSEO />
      <Wrapper>
        <WrapperImage style={{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.36), rgba(0, 0, 0, 0.25) ),  url(${project.cover.childImageSharp.resize.src})`,
        }}
        />
        <Header>{project.title}</Header>
        <InformationWrapper>
          <InfoBlock>
            <Top>Client</Top>
            <Bottom>{project.client}</Bottom>
          </InfoBlock>
          <InfoBlock>
            <Top>Date</Top>
            <Bottom>{project.date}</Bottom>
          </InfoBlock>
          <InfoBlock>
            <Top>Type</Top>
            <Bottom>{project.service}</Bottom>
          </InfoBlock>
        </InformationWrapper>
      </Wrapper>
      <Container type="text">
        <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
      </Container>
    </React.Fragment>
  );
};

export default Project;

Project.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    markdownRemark: PropTypes.object.isRequired,
  }).isRequired,
};

export const pageQuery = graphql`
  query ProjectPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date
        client
        service
        cover {
          childImageSharp {
            resize(width:25) {
              src
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`;
