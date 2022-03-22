import { createRouter, createWebHistory } from 'vue-router'
const Home = () =>
    import ('../views/home/Home.vue')
const Cart = () =>
    import ('../views/cart/Cart.vue')
const Category = () =>
    import ('../views/category/Category.vue')
const Profile = () =>
    import ('../views/profile/Profile.vue')
const detail = () =>
    import ('../views/detail/detail.vue')

const routes = [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        component: Home
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/detail/:iid',
        component: detail
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router