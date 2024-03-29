module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    description: 'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@gatsbyjs'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-202845980-1',
        // this option places the tracking script into the head of the DOM
        head: true
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://manciniceronistudiolegale.us1.list-manage.com/subscribe/post?u=5523839e64f45046d0f542343&amp;id=16ba30f3a6'
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        url:
          // allows a fallback url if WPGRAPHQL_URL is not set in the env, this may be a local or remote WP instance.
          process.env.WPGRAPHQL_URL || 'https://blog.manciniceronistudiolegale.it/graphql',
        schema: {
          // Prefixes all WP Types with "Wp" so "Post and allPost" become "WpPost and allWpPost".
          typePrefix: 'Wp'
        },
        develop: {
          // caches media files outside of Gatsby's default cache an thus allows them to persist through a cache reset.
          hardCacheMediaFiles: true
        },
        type: {
          Post: {
            limit:
              process.env.NODE_ENV === 'development'
                ? // Lets just pull 50 posts in development to make it easy on ourselves (aka. faster).
                50
                : // and we don't actually need more than 5000 in production for this particular site
                5000
          }
        }
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png' // This path is relative to the root of the site.
      }
    }
  ]
}
