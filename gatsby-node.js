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
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then((result) => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }

      result.data.allMarkdownRemark.edges
        .filter(({node: {fields}}) => fields)
        .forEach(({node: {fields: {slug}}}) => {
          createPage({
            path: slug,
            component: resolve(`./src/templates/markdown.js`),
            context: {
              slug
            }
          });
        });
    });
  }
};
