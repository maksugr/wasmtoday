'use strict';

module.exports = {
  siteMetadata: {
    title: 'wasm.today'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        src: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'en',
        useLangKeyLayout: false,
        markdownRemark: {
          postPage: 'src/templates/markdown.js',
          query: `
          {
              allMarkdownRemark {
                  edges {
                    node {
                      fields {
                        slug,
                        langKey
                      }
                    }
                  }
              }
          }
          `
        }
      }
    }
  ]
};
