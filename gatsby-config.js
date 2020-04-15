module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      options: {
        icon: 'src/images/gatsby-icon.png',
        name: 'The Zeit & CloudFlare Dragon',
        short_name: 'The Zeit & CloudFlare Dragon',
        start_url: '/',
      },
      resolve: `gatsby-plugin-manifest`,
    },
  ],
  siteMetadata: {
    title: 'The Zeit & CloudFlare Dragon',
  },
};
