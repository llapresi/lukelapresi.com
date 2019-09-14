import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { ProjectListing } from 'components';
import { HeroBanner } from '../components';

const Index = ({
  data: {
    allMarkdownRemark: { edges: projectEdges },
  },
}) => (
  <React.Fragment>
    <HeroBanner />
    <ProjectListing projectEdges={projectEdges} />
  </React.Fragment>
);

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___order], order: ASC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            service
            cover {
              childImageSharp {
                fluid(maxWidth: 600, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
