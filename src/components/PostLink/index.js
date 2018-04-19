// @flow

import React from 'react';
import Link from 'gatsby-link';

type PostLinkProps = {|
  post: {
    frontmatter: {
      path: string,
      date: string
    }
  }
|};

const PostLink = ({post}: PostLinkProps) => (
  <div>
    <Link to={post.frontmatter.path}>
      {post.frontmatter.date}
    </Link>
  </div>
);

export default PostLink;
