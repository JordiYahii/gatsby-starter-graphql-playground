module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `GraphQL Playground`,
    // Default title of the page
    siteTitleAlt: `GraphQL Playground - @lekoarts/gatsby-theme-graphql-playground`,
    // Can be used for e.g. JSONLD
    siteHeadline: `GraphQL Playground - Gatsby Theme from @lekoarts`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://gatsby-theme-graphql-playground.netlify.com`,
    // Used for SEO
    siteDescription: `Stub description for graphql-playground`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@lekoarts_de`,
    // Will be the root URL for the iFrame
    graphiQLUrl: `https://711808k40x.sse.codesandbox.io/___graphql`
  },  
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-graphql-playground`,
      options: {},
    },
    `gatsby-plugin-netlify`,
  ],
}
