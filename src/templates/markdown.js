// @flow

import React from 'react';

type Props = {|
  data: {
    markdownRemark: {
      frontmatter: {
        title: string
      },
      html: string
    }
  }
|};

export default function Template ({data}: Props) {
  const {
    markdownRemark: {
      frontmatter,
      html
    }
  } = data;

  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: html}} />
    </div>
  );
};

export const query = graphql`
  query MarkdownQuery($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
      }
      html
    }
  }
`;
