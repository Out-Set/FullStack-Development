import { createWebHistory, createRouter } from 'vue-router'

const routes = [

    
    {
        name: 'HomeComponent',
        path: '/',
        component: () => import('@/components/homePage.vue')
    },
    {
        name: 'schedulerHome',
        path: '/schedulerHome',
        component: () => import('@/components/Scheduler/schedulerHome.vue')
    },
    {
        name: 'scheduleTask',
        path: '/scheduleTask',
        component: () => import('@/components/Scheduler/resetCronExpression.vue')
    },
    {
        name: 'commonLogs',
        path: '/commonLogs',
        component: () => import('@/components/Scheduler/commonLogs.vue')
    },
    {
        name: 'integrationHome',
        path: '/integrationHome',
        component: () => import('@/components/Integration/integrationHome.vue')
    },
    {
        name: 'auditDetails',
        path: '/auditDetails',
        component: () => import('@/components/Integration/requestResponseAuditDetails.vue')
    },
    {
        name: 'serviceIdentifiers',
        path: '/serviceIdentifiers',
        component: () => import('@/components/Integration/serviceIdentifiersTable.vue')
    },

    //serviceIdentifiers
    
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;