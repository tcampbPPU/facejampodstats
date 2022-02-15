import theme from './theme-docs'

const siteUrl = 'https://facejampodstats.com'

const sitemapRoutes = async () => {
  const routes = ['/', 'about']

  const { $content } = require('@nuxt/content')
  const pages = await $content('en', { deep: true })
    .sortBy('position', 'asc')
    .only(['slug'])
    .skip(2)
    .fetch()

  for (const page of pages) routes.push(`/episodes/${page.slug}`)

  return routes
}

export default theme({
  docs: {
    primaryColor: '#de7d16',
  },
  modules: ['@nuxtjs/robots', '@nuxtjs/sitemap'],
  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: siteUrl + '/sitemap.xml',
  },
  sitemap: {
    hostname: siteUrl,
    gzip: true,
    exclude: ['/releases'],
    routes: sitemapRoutes,
  },
})
