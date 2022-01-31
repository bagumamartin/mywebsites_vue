require = require('esm')(module);
const { routes } = require('./src/routes.js');

module.exports = {
  pluginOptions: {
    autoRouting: {
      chunkNamePrefix: 'page-',
      outFile: "./src/router/routes.js",
      nested: false,
      pages: './src/views',
      importPrefix: '@/views/',
      dynamicImport: true,
    },
    sitemap: {
      baseURL: 'https://apigcohs.cybfyafrica.com',
      routes,
      pretty: true,
      defaults: {
        lastmod:    '2020-01-01',
        changefreq: 'weekly',
        priority:   1.0,
      },
      outputDir: '/temp/sitemap',
    }
  }
}
