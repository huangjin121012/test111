import Vue from 'vue'
import Router from 'vue-router'

import Index from '../components/index.vue'
import Unit from '../components/unit.vue'
import Self from '../components/user.vue'
import Register from '../components/userRegister'
import Main from '../components/main'
import Evaluation from '../components/evaluation'
import Step from '../components/step'
import UserRegister1 from '../components/userRegister1'
import Comeva from '../components/company_evaluation'
import Agreement from '../components/agreement'
import CorporateInfo from '../components/corporate_info'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Index',
            component: Index
        }, {
            path: '/unit',
            name: 'Unit',
            component: Unit,

        }, {
            path: '/register',
            name: 'Register',
            component: Register,
        }, {
            path: '/corporate_info',
            name: 'CorporateInfo',
            component: CorporateInfo,
        }, {
            path: '/main',
            name: 'Main',
            component: Main,
        }, {
            path: '/evaluation',
            name: 'Evaluation',
            component: Evaluation,
        }, {
            path: '/step',
            name: 'Step',
            component: Step,
        }, {
            path: '/comeva',
            name: 'Comeva',
            component: Comeva,
        },
        {
            path: '/UserRegister1',
            name: 'UserRegister1',
            component: UserRegister1,
        },
        {
            path: '/agreement',
            name: 'Agreement',
            component: Agreement,
        },
        {
            path: '/self',
            name: 'Self',
            component: Self,
        }
    ]
})