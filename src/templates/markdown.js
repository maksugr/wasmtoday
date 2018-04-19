// @flow

import React from 'react';

type Props = {|
  data: {
    markdownRemark: {
      frontmatter: {
        date: string
      },
      html: string
    }
  }
|};

export default function Markdown({data}: Props) {
  const {markdownRemark} = data;
  const {frontmatter, html} = markdownRemark;
  return (
    <div>
      <time>{frontmatter.date}</time>
      <div dangerouslySetInnerHTML={{__html: html}} />
    </div>
  );
}

export const markdownQuery = graphql`
  query MarkdownQuery($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
      }
    }
  }
`;
