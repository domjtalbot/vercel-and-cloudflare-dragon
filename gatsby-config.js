module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      options: {
        icon: 'src/images/gatsby-icon.png',
        name: 'Vercel and Cloudflare Dragon',
        short_name: 'Vercel and Cloudflare Dragon',
        start_url: '/',
      },
      resolve: `gatsby-plugin-manifest`,
    },
  ],
  siteMetadata: {
    title: 'Vercel and Cloudflare Dragon',
  },
};
