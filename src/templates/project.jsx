import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { Container, SEO, Duotone, CutCorner } from 'components';
import sample from 'lodash/sample';
import config from '../../config/website';
import { overlay } from '../../config/theme';
import { ProjectHeader, ProjectTitle, ProjectType } from '../components/ProjectCard/ProjectCard';

const overlayColor = sample(overlay);


const ArticleWrapper = styled.div`
  margin-top: calc(100vh - ${props => props.theme.toolbar.height} - ${props => props.theme.project.bannerDistance});
  background-color: white;
`;

const TitleWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: calc(100vh - ${props => props.theme.toolbar.height} - ${props => props.theme.project.bannerDistance});
  z-index: -1;
  transform-origin: 0 0;
  transform: translateZ(-2px) scale(3);

  @media (max-width: ${props => props.theme.breakpoints.s}) {
    transform: translateZ(-0.4px) scale(1.4);
  }
`;

const HeroImage = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  mix-blend-mode: ${props => props.shadowBlend};
`;

const ImageWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: calc(100vh - ${props => props.theme.toolbar.height} - ${props => props.theme.project.bannerDistance});
  z-index: -2;
  transform-origin: 0 0;
  transform: translateZ(-3px) scale(4);
`;

const Card = styled(ProjectHeader)`
  position: absolute;
  top: 48px;
  left: 48px;
  width: 400px;
  height: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 100%;
    left: 0;
    top: auto;
    bottom: 0;
  }
`;

const InfoText = styled(ProjectType)`
  font-size: 1.4em;
`;

const Header = styled(ProjectTitle)`
  font-size: 2em;
  margin-bottom: 0px;

`;

const StyledContainer = styled(Container)`
  @media (min-width: ${props => props.theme.breakpoints.s}) {
    transform: translateY(-60px);
  }
`;

const Project = ({ pageContext: { slug }, data: { markdownRemark: postNode } }) => {
  const project = postNode.frontmatter;
  return (
    <React.Fragment>
      <Helmet title={`${project.title} | ${config.siteTitle}`} />
      <SEO postPath={slug} postNode={postNode} postSEO />
      <TitleWrapper>
        <Card>
          <Header>{project.title}</Header>
          <InfoText>{project.service}</InfoText>
          <InfoText>{project.client}</InfoText>
          <InfoText>{project.date}</InfoText>
        </Card>
      </TitleWrapper>
      <ImageWrapper>
        <Duotone
          shadowColor={project.shadowColor}
          shadowBlend={project.shadowBlend}
          highlightColor={project.highlightColor}
          highlightBlend={project.highlightBlend}
        >
          <HeroImage
            style={{ backgroundImage: `url(${project.cover.childImageSharp.resize.src})` }}
          />
        </Duotone>
      </ImageWrapper>
      <ArticleWrapper>
        <StyledContainer type="text">
          <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
        </StyledContainer>
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
            resize(width:1100, grayscale: true) {
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
