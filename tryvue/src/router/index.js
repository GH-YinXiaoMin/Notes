// history模式
import {
    createRouter,
    createWebHashHistory,
} from 'vue-router'

import course from '@/pages/course.vue'
import course_p6 from '@/pages/course_p6.vue'
import course_p7 from '@/pages/course_p7.vue'
import course_p8 from '@/pages/course_p8.vue'
import course_p9 from '@/pages/course_p9.vue'
import course_p10 from '@/pages/course_p10.vue'
import course_p11 from '@/pages/course_p11.vue'
import course_p12 from '@/pages/course_p12.vue'
import course_p13 from '@/pages/course_p13.vue'
import course_p14 from '@/pages/course_p14.vue'
import course_p15 from '@/pages/course_p15.vue'
import course_p16 from '@/pages/course_p16.vue'
import course_p17 from '@/pages/course_p17.vue'
import course_p18 from '@/pages/course_p18.vue'
import course_p19 from '@/pages/course_p19.vue'
import course_p20 from '@/pages/course_p20.vue'
import course_p21 from '@/pages/course_p21.vue'





const routes = [
    // 路由的默认路径
    {
        path: "/",
        component: course
    },
    {
        path: "/course_p6",
        component: course_p6
    },
    {
        path: "/course_p7",
        component: course_p7
    },
    {
        path: "/course_p8",
        component: course_p8
    },
    {
        path: "/course_p9",
        component: course_p9
    },
    {
        path: "/course_p10",
        component: course_p10
    },
    {
        path: "/course_p11",
        component: course_p11
    },
    {
        path: "/course_p12",
        component: course_p12
    },
    {
        path: "/course_p13",
        component: course_p13
    },
    {
        path: "/course_p14",
        component: course_p14
    },
    {
        path: "/course_p15",
        component: course_p15
    },
    {
        path: "/course_p16",
        component: course_p16
    },
    {
        path: "/course_p17",
        component: course_p17
    },
    {
        path: "/course_p18",
        component: course_p18
    },
    {
        path: "/course_p19",
        component: course_p19
    },
    {
        path: "/course_p20",
        component: course_p20
    },
    {
        path: "/course_p21",
        component: course_p21
    },
]

// 创建路由对象
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router;
