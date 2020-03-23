require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `خليك بالبيت`,
    description: ``,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-firebase`,
      options: {
        credentials: {
          apiKey: process.env.YOUR_FIREBASE_API_KEY,
          authDomain: process.env.YOUR_FIREBASE_AUTH_DOMAIN,
          databaseURL: process.env.YOUR_FIREBASE_DATABASE_URL,
          projectId: process.env.YOUR_FIREBASE_PROJECT_ID,
          storageBucket: process.env.YOUR_FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.YOUR_FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.YOUR_FIREBASE_APP_ID,
        },
      },
    },
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `خليك بالبيت`,
        short_name: `خليك بالبيت`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
