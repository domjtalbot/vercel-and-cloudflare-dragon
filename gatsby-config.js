module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      options: {
        icon: 'src/images/gatsby-icon.png',
        name: 'Gatsby + Node.js (TypeScript) API',
        short_name: 'Gatbsy + Node.js (TypeScript)',
        start_url: '/',
      },
      resolve: `gatsby-plugin-manifest`,
    },
  ],
  siteMetadata: {
    title: 'Gatsby + Node.js (TypeScript) API',
  },
};
