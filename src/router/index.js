import Vue from 'vue'
import VueRouter from 'vue-router'
import ArticleList from '../views/ArticleList'
import ArticleCreate from '../views/ArticleCreate'
import ArticleEdit from '../views/ArticleEdit'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/articles/index'
  },
  {
    path: '/articles/index',
    name: 'article-list',
    component: ArticleList
  },
  {
    path: '/articles/create',
    name: 'article-create',
    component: ArticleCreate
  },
  {
    path: '/article/:id/edit',
    name: 'article-edit',
    component: ArticleEdit
  },
]

const router = new VueRouter({
  routes
})

export default router
