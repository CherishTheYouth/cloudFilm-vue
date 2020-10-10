import App from '../App'
import login from '../page/login'
import register from '../page/register'

const loginUrl = () => { return import('../page/login') }
console.log('login', login)
console.log('loginUrl', loginUrl)

export default [{
  path: '/',
  component: App, // 顶层路由，对应index.html
  children: [
    {
      path: '/login',
      component: loginUrl
    },
    {
      path: '/register',
      component: register
    }
  ]
}]
