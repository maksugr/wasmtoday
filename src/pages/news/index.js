// @flow

import React from 'react';

type NewsPageProps = {|
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

const NewsPage = ({data: {allMarkdownRemark: {edges}}}: NewsPageProps) => {
  const Posts = edges
    .filter((edge) => edge.node.frontmatter.path.split('/')[1] === 'news')
    .map((edge, i) => <div key={i} />);

  return <div>{Posts}</div>;
};

export default NewsPage;

export const newsQuery = graphql`
  query NewsQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
