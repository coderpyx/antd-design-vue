import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Layout from '@/layouts';
import mainLayout from '@/layouts/mainLayout';
import echartRouter from './modules/echarts';
import componentsRouter from './modules/components';
import nestRouter from './modules/nest';

//基础路由
export const baseRoute = [
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    hidden: true,
    children: [
      {
        name: 'index',
        path: '/index',
        component: () => import('@/views/index/index'),
        meta: {
          role: ['admin', 'test'],
          title: '当日作品',
          icon: 'dashboard'
        }
      },
      {
        name: 'icon',
        path: '/icon',
        component: () => import('@/views/icon/index'),
        meta: {
          role: ['admin', 'test'],
          title: '已点评作品库',
          icon: 'icon'
        }
      },
      {
        name: 'permission',
        path: '/permission',
        component: () => import('@/views/permission/index'),
        meta: {
          title: '人员作品库',
          icon: 'permission'
        }
      },
      {
        name: 'webGl',
        component: mainLayout,
        path: '/webGl',
        redirect: '/webGl/ArcGis',
        meta: {
          role: ['admin', 'test'],
          title: '样片主题库管理',
          icon: 'webGl'
        },
        children: [
          {
            name: 'ArcGis',
            path: '/webGl/ArcGis',
            component: () => import('@/views/webGl/ArcGis/index'),
            meta: { title: '优势风格排行'}
          }
        ]
      },
      {
        name: 'system',
        component: mainLayout,
        path: '/system',
        meta: {
          role: ['admin'],
          title: '系统设置',
          icon: 'system'
        }
      }
    ]
  },
  
 
];

export const asyncRoutes = [ ];

const createRouter = function() {
  return new VueRouter({
    routes: baseRoute,
    scrollBehavior: () => ({ y: 0 })
  });
};

const router = createRouter();

export function resetRouter() {    // 初始化基本路由
  router.matcher = createRouter().matcher;
}

//重定向时报错，用这个不让他报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err);
};

export default router;
