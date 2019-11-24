import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { Container, SEO } from 'components';
import sample from 'lodash/sample';
import config from '../../config/website';
import { overlay } from '../../config/theme';
import { ProjectHeader, ProjectTitle, ProjectType } from '../components/ProjectCard/ProjectCard';


const overlayColor = sample(overlay);

const Wrapper = styled.section`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: calc(100vh - ${props => props.theme.toolbar.height});
  overflow: hidden;
  color: white;
  transform: translateZ(-.25px) scale(1.125);
  z-index: -1;
`;

const PageWrapper = styled.div`
  
`;

const ArticleWrapper = styled(Container)`
  margin-top: calc(100vh - ${props => props.theme.toolbar.height});
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
  transform: translateZ(-.5px) scale(1.27);
`;

const InformationWrapper = styled(ProjectHeader)`
  position: absolute;
  bottom: 6vw;
  left: 5vw;
  width: 400px;
  height: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
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

const InfoText = styled(ProjectType)`
  font-size: 1.4em;
`;

const Header = styled(ProjectTitle)`
  font-size: 2em;
  margin-bottom: 0px;
`;

const Project = ({ pageContext: { slug }, data: { markdownRemark: postNode } }) => {
  const project = postNode.frontmatter;
  return (
    <React.Fragment>
      <Helmet title={`${project.title} | ${config.siteTitle}`} />
      <SEO postPath={slug} postNode={postNode} postSEO />
      <PageWrapper>
        <Wrapper>
          <InformationWrapper>
            <Header>{project.title}</Header>
            <InfoText>{project.service}</InfoText>
            <InfoText>{project.client}</InfoText>
            <InfoText>{project.date}</InfoText>
          </InformationWrapper>
        </Wrapper>
        <WrapperImage style={{
          backgroundImage: `url(${project.cover.childImageSharp.resize.src})`,
        }}
        />
        <ArticleWrapper type="text">
          <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
        </ArticleWrapper>
      </PageWrapper>
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
            resize(width:1000) {
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
