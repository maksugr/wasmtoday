// @flow

import React from 'react';
import PostLink from '../../components/PostLink';

type TldrPageProps = {|
  data: {
    allMarkdownRemark: {
      edges: [{
        node: {
          frontmatter: {
            date: string,
            path: string
          },
          id: number
        }
      }]
    }
  }
|};

const TldrPage = ({data: {allMarkdownRemark: {edges}}}: TldrPageProps) => {
  const Posts = edges
    .filter((edge) => edge.node.frontmatter.path.split('/')[1] === 'tldr')
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />);

  return <div>{Posts}</div>;
};

export default TldrPage;

export const tldrQuery = graphql`
  query TldrQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
