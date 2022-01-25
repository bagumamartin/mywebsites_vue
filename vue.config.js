const SitemapPlugin = require('sitemap-webpack-plugin').default

const paths = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
    path: '/sign-up',
    name: 'SignUp',
    component: () => import(/* webpackChunkName: "signup" */ './views/SignUp.vue')
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
    meta: {
        requireLogin: true
    }
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "search" */ './views/Search.vue'),
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "cart" */ './views/Cart.vue'),
  },
  {
    path: '/cart/success',
    name: 'Success',
    component: () => import(/* webpackChunkName: "success" */ './views/Success.vue'),
  },
  {
    path: '/cart/checkout',
    name: 'Checkout',
    component: () => import(/* webpackChunkName: "checkout" */ './views/Checkout.vue'),
    meta: {
        requireLogin: true
    }
  },
  {
    path: '/:category_slug/:product_slug',
    name: 'Product',
    component: () => import(/* webpackChunkName: "product" */ './views/Product.vue'),
  },
  {
    path: '/:category_slug',
    name: 'Category',
    component: () => import(/* webpackChunkName: "category" */ './views/Category.vue'),
  }
]
 
module.exports = {
    configureWebpack: {
        plugins: [
            new SitemapPlugin({ base: 'https://gcohs.cybfyafrica.com', paths })
        ]
    },
    // Other exports here
}