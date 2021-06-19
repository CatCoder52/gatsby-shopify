require("dotenv").config()

module.exports = {
  siteMetadata: {
    siteTitle: "gatsby-shopify",
    siteTitleDefault: "Gatsbyjs",
    siteUrl: "https://gatsbyshopify.netlify.app",
    hrefLang: "en",
    siteDescription:
      "A Gatsby store with product overview, individual product pages, and a cart.",
    siteImage: "/default-og-image.jpg",
    twitter: "@gatsbyjs",
  },
  flags: {
    FAST_DEV: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        apiKey: process.env.SHOPIFY_API_KEY,
        password: process.env.SHOPIFY_SHOP_PASSWORD,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
        shopifyConnections: ["collections"],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsbyShop`,
        short_name: `gatsbyShop`,
        start_url: `/`,
        background_color: `#212121`,
        theme_color: `#f39ca9`,
        display: `standalone`,
        icon: `./static/favicon-32x32.png`,
      },
    },

    "gatsby-plugin-offline",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-gatsby-cloud",
    // Add your Google Analytics ID to the .env file to enable
    // Otherwise, this plugin can be removed
    process.env.GOOGLE_ANALYTICS_ID && {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
  ].filter(Boolean),
}
