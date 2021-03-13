import PageContent from './components/PageContent.vue'
import Orders from './components/Orders.vue'
import Modify from './components/Modify.vue'
import Dashboard from './components/Dashboard.vue'
export default[
    { path: '/', component: PageContent},
    { path: '/orders', name: "Orders", component: Orders},
    { path: '/modify', name: "Modify", component: Modify, props: true},
    { path: '/dashboard', component: Dashboard}
]

