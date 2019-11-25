import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { keyframes } from 'emotion';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { Container, SEO } from 'components';
import sample from 'lodash/sample';
import config from '../../config/website';
import { overlay } from '../../config/theme';
import { ProjectHeader, ProjectTitle, ProjectType } from '../components/ProjectCard/ProjectCard';


const overlayColor = sample(overlay);


const ArticleWrapper = styled.div`
  margin-top: calc(100vh - ${props => props.theme.toolbar.height});
  background-color: white;
`;

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: calc(100vh - ${props => props.theme.toolbar.height});
  transform: translateZ(-.4px) scale(1.144);
  z-index: -1;
`;

const WrapperImage = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: calc(100vh - ${props => props.theme.toolbar.height});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  z-index: -2;
  transform: translateZ(-3px) scale(2.12);

  &:before {
    background-color: ${props => props.highlight};
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    mix-blend-mode: ${props => props.highlightBlend};
    position: absolute;
    top: 0;
    left: 0;
  }
  
  &:after {
    background-color: ${props => props.shadow};
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    mix-blend-mode: ${props => props.shadowBlend};
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const InformationWrapper = styled(ProjectHeader)`
  position: absolute;
  left: 48px;
  bottom: 48px;
  width: 400px;
  height: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 100%;
    left: 0;
    bottom: 0;
    padding: 20px;
  }
`;

const InfoText = styled(ProjectType)`
  font-size: 1.4em;
`;

const Header = styled(ProjectTitle)`
  font-size: 2em;
  margin-bottom: 0px;

`;

const ArrowDown = styled.i`
  border: solid white;
  border-width: 0 4px 4px 0;
  display: inline-block;
  padding: 8px;
  transform: rotate(45deg);
`;

const bounce = keyframes`
  from, 0%, 100% to {
    transform: translate3d(0,0,0);
  }

  50% {
    transform: translate3d(0, 15px, 0);
  }
`;

const ArrowParent = styled.div`
  position: absolute;
  width: 100%;
  text-align:center;
  bottom: 70px;
  animation: ${bounce} 0.8s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;

  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: auto;
    right: 40px;
  }
`;

const Project = ({ pageContext: { slug }, data: { markdownRemark: postNode } }) => {
  const project = postNode.frontmatter;
  return (
    <React.Fragment>
      <Helmet title={`${project.title} | ${config.siteTitle}`} />
      <SEO postPath={slug} postNode={postNode} postSEO />
      <Wrapper>
        <InformationWrapper>
          <Header>{project.title}</Header>
          <InfoText>{project.service}</InfoText>
          <InfoText>{project.client}</InfoText>
          <InfoText>{project.date}</InfoText>
        </InformationWrapper>
      </Wrapper>
      <ArrowParent>
        <ArrowDown />
      </ArrowParent>
      <WrapperImage
        style={{
          backgroundImage: `url(${project.cover.childImageSharp.resize.src})`,
        }}
        highlight={project.highlightColor}
        shadow={project.shadowColor}
        highlightBlend={project.highlightBlend}
        shadowBlend={project.shadowBlend}
      />
      <ArticleWrapper>
        <Container type="text">
          <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
        </Container>
      </ArticleWrapper>
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
        highlightColor
        shadowColor
        highlightBlend
        shadowBlend
        cover {
          childImageSharp {
            resize(width:800, grayscale: true) {
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
