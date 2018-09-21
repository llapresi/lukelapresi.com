import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { ProjectListing } from 'components';

const Index = ({
  data: {
    allMarkdownRemark: { edges: projectEdges },
  },
}) => (
  <ProjectListing projectEdges={projectEdges} />
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
