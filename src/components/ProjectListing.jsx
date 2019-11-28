import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'react-emotion';
import Img from 'gatsby-image';
import HeroBanner from './HeroBanner';
import CutCorner from './CutCorner';
import { ProjectHeader, ProjectTitle, ProjectType } from './ProjectCard/ProjectCard';

const Wrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  
  width: 90%;
  margin: auto;
  @media (min-width: ${props => props.theme.breakpoints.l}) {
    grid-template-columns: repeat(3, minmax(280px, 1fr));
    width: ${props => props.theme.breakpoints.l};
  }

  padding-top: 1rem;
`;

const Item = styled.div`
  position: relative;
  &:before {
    content: '';
    display: block;
    padding-top: ${props => props.theme.homepagetiles.ratio};
  }
  
  will-change: transform;
  transition: transform 160ms;
  transition-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
`;

const Content = styled.div`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const ImageWrapper = styled.div`
  > div {
    bottom: 0;
    left: 0;
    position: absolute !important;
    top: ${props => props.theme.homepagetiles.titleHeight};
    width: 100%;
  }
`;

const ProjectLink = styled(Link)`
  :focus,
  :hover {
    transform: translate3d(0em, -0.2em, 0em);
  }
  
  /* Have to define this twice for focus and hover for some reason */
  :hover ${ProjectHeader} {
    background-position: bottom left;
    transition: background-position 120ms;
    transition-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
  }

  :focus ${ProjectHeader} {
    background-position: bottom left;
    transition: background-position 120ms;
    transition-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
  }

  transition: transform 160ms;
  transition-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
`;

const ProjectListing = ({ projectEdges }) => (
  <Wrapper>
    {projectEdges.map(project => (
      <ProjectLink to={project.node.fields.slug}>
        <Item key={project.node.fields.slug}>
          <Content>
            <ImageWrapper>
              <Img fluid={project.node.frontmatter.cover.childImageSharp.fluid} />
            </ImageWrapper>
            <ProjectHeader>
              <ProjectTitle>{project.node.frontmatter.title}</ProjectTitle>
              <ProjectType>{project.node.frontmatter.service}</ProjectType>
            </ProjectHeader>
          </Content>
        </Item>
      </ProjectLink>
    ))}
  </Wrapper>
);

export default ProjectListing;

ProjectListing.propTypes = {
  projectEdges: PropTypes.array.isRequired,
};
