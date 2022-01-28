const SitemapPlugin = require('sitemap-webpack-plugin').default

const paths = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
        lastmod: new Date().toISOString().slice(0,10),
        priority: 0.8,
        changefreq: 'hourly',
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
        lastmod: new Date().toISOString().slice(0,10),
        priority: 0.8,
        changefreq: 'hourly',
    },
    {
    path: '/sign-up',
    name: 'SignUp',
    component: () => import(/* webpackChunkName: "signup" */ './views/SignUp.vue'),
    lastmod: new Date().toISOString().slice(0,10),
    priority: 0.8,
    changefreq: 'hourly',
  },
  {
    path: '/log-in',
    name: 'LogIn',
    component: () => import(/* webpackChunkName: "login" */ './views/LogIn.vue'),
  },
  {
    path: '/my-account',
    name: 'MyAccount',
    component: () => import(/* webpackChunkName: "myaccount" */ './views/MyAccount.vue'),
    lastmod: new Date().toISOString().slice(0,10),
    priority: 0.8,
    changefreq: 'hourly',
    meta: {
        requireLogin: true
    }
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "search" */ './views/Search.vue'),
    lastmod: new Date().toISOString().slice(0,10),
    priority: 0.8,
    changefreq: 'hourly',
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "cart" */ './views/Cart.vue'),
    lastmod: new Date().toISOString().slice(0,10),
    priority: 0.8,
    changefreq: 'hourly',
  },
  {
    path: '/cart/success',
    name: 'Success',
    component: () => import(/* webpackChunkName: "success" */ './views/Success.vue'),
    lastmod: new Date().toISOString().slice(0,10),
    priority: 0.8,
    changefreq: 'hourly',
  },
  {
    path: '/cart/checkout',
    name: 'Checkout',
    component: () => import(/* webpackChunkName: "checkout" */ './views/Checkout.vue'),
    lastmod: new Date().toISOString().slice(0,10),
    priority: 0.8,
    changefreq: 'hourly',
    meta: {
        requireLogin: true
    }
  },
  {
    path: '/:category_slug/:product_slug',
    name: 'Product',
    component: () => import(/* webpackChunkName: "product" */ './views/Product.vue'),
    lastmod: new Date().toISOString().slice(0,10),
    priority: 0.8,
    changefreq: 'hourly',
  },
  {
    path: '/:category_slug',
    name: 'Category',
    component: () => import(/* webpackChunkName: "category" */ './views/Category.vue'),
    lastmod: new Date().toISOString().slice(0,10),
    priority: 0.8,
    changefreq: 'hourly',
  }
]
 
module.exports = {
    configureWebpack: {
        plugins: [
            new SitemapPlugin({ base: 'https://gcohs.cybfyafrica.com', paths,
            options: {
                filename: 'sitemap.xml',
                lastmod: true,
                changefreq: 'hourly',
                priority: 0.9
            }})
        ]
    },
    // Other exports here
}