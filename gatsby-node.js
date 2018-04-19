'use strict';

const {resolve} = require('path');

module.exports = {
  modifyBabelrc: ({babelrc}) => Object.assign(
    {},
    babelrc,
    {presets: babelrc.presets.concat(['flow'])}
  ),
  createPages: ({graphql, boundActionCreators}) => {
    const {createPage} = boundActionCreators;

    return graphql(`
      {
        allMarkdownRemark{
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }

      result.data.allMarkdownRemark.edges.forEach(({node: {frontmatter}}) => {
        const {path} = frontmatter;

        createPage({
          path,
          component: resolve(`src/templates/markdown.js`)
        });
      });
    });
  }
};
