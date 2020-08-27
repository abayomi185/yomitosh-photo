// next.config.js
module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/Higlights',
          permanent: true
        }
      ]
    }
  }