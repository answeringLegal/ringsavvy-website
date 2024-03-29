const path = require('path');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
};

// if you want to use the preview API please define
// CONTENTFUL_HOST in your environment config
// the `host` property should map to `preview.contentful.com`
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  );
}

module.exports = {
  siteMetadata: {
    title: 'Best Quality 24/7 Live Answering Service and Virtual Receptionists',
    siteUrl: `https://www.ringsavvy.com`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-MPT49DQ',

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,

        routeChangeEventName: 'gatsbyRouteChange', // Customize the event name
        enableWebVitalsTracking: true, // Enables tracking for web vitals
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, `images`),
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.ringsavvy.com`,
      },
    },
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        https: true,
        host: 'www.ringsavvy.com',
        ErrorDocument: `
          ErrorDocument 401 /error_pages/401.html
          ErrorDocument 403 /error_pages/403.html
          ErrorDocument 404 /error_pages/404.html
          ErrorDocument 500 /error_pages/500.html
        `,
      },
    },
  ],
};
