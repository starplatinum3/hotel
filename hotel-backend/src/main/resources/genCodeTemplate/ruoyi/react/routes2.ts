export default [
  {
    path: '/',
    redirect: '/dashboard/workplace',
  },
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            // pages 开头吗
            component: './user/Login',
          },
          {
            name: 'register',
            path: '/user/register',
            component: './user/Register',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/account',

    routes: [
      {
        path: '/account',
        redirect: '/account/center',
      },
      {
        name: 'center',
        path: '/account/center',
        component: 'account/center',
      },
      {
        name: 'settings',
        path: '/account/settings',
        component: 'account/settings',
      },
    ],
  },
  // {
  //   path: '/acc',
  //   component: '/acc',


  // },
  {
    name: 'dashboard',
    path: '/dashboard',
    component: '@/layouts/TabsLayout',
    routes: [
      {
        path: '/dashboard',
        redirect: '/dashboard/workplace',
      },
      {
        title: 'menu.dashboard.workplace',
        name: 'workplace',
        path: '/dashboard/workplace',
        component: 'dashboard/workplace',
        wrappers: ['@/components/KeepAlive'],
        keppAlive: true,
      },
      {
        title: 'menu.dashboard.monitor',
        name: 'monitor',
        path: '/dashboard/monitor',
        component: 'dashboard/monitor',
        wrappers: ['@/components/KeepAlive'],
        keppAlive: true,
      },
      {
        title: 'menu.dashboard.analysis',
        name: 'analysis',
        path: '/dashboard/analysis',
        component: 'dashboard/analysis',
        wrappers: ['@/components/KeepAlive'],
        keppAlive: true,
      },
    ],
  },
  {
      name: 'entity',
      path: '/entity',
      component: '@/layouts/TabsLayout',
      routes: [
        #routeRows#
      ]
    },
  {
    name: 'system',
    path: '/system',
    component: '@/layouts/TabsLayout',
    routes: [
      {
        path: '/system',
        redirect: '/system/user',
      },
      {
        title: 'menu.system.user',
        name: 'user',
        path: '/system/user',
        component: 'system/user',
        wrappers: ['@/components/KeepAlive'],
        keppAlive: true,
      },
      {
        title: 'menu.system.role',
        name: 'role',
        path: '/system/role',
        component: 'system/role',
        wrappers: ['@/components/KeepAlive'],
        keppAlive: true,
      },
      {
        title: 'menu.system.humanArchive',
        name: 'humanArchive',
        path: '/system/humanArchive',
        component: 'system/humanArchive',
        wrappers: ['@/components/KeepAlive'],
        keppAlive: true,
      },


      // system/acc  前端menu 要配置 左边栏目
      {
        title: 'menu.system.hum',
        name: 'hum',
        path: '/system/hum',
        component: 'system/hum',
        wrappers: ['@/components/KeepAlive'],
        keppAlive: true,
      },

      {
        title: 'menu.system.acc',
        name: 'acc',
        path: '/system/acc',
        component: 'system/acc',
        wrappers: ['@/components/KeepAlive'],
        keppAlive: true,
      },
      {
        title: 'menu.system.menu',
        name: 'menu',
        path: '/system/menu',
        component: 'system/menu',
        wrappers: ['@/components/KeepAlive'],
        keppAlive: true,
      },
      {
        title: 'menu.system.dept',
        name: 'dept',
        path: '/system/dept',
        component: 'system/dept',
        wrappers: ['@/components/KeepAlive'],
        keppAlive: true,
      },
      {
        title: 'menu.system.user',
        name: 'post',
        path: '/system/post',
        component: 'system/post',
        wrappers: ['@/components/KeepAlive'],
        keppAlive: true,
      },
      {
        title: 'menu.system.dict',
        name: 'dict',
        path: '/system/dict',
        component: 'system/dict',
        wrappers: ['@/components/KeepAlive'],
        keppAlive: true,
      },
      {
        title: 'menu.system.dict.data',
        name: 'dictData',
        path: '/system/dict/data/:id?',
        component: 'system/dictData',
        wrappers: ['@/components/KeepAlive'],
        keppAlive: true,
      },
      {
        title: 'menu.system.config',
        name: 'config',
        path: '/system/config',
        component: 'system/config',
        wrappers: ['@/components/KeepAlive'],
        keppAlive: true,
      },
      {
        title: 'menu.system.notice',
        name: 'notice',
        path: '/system/notice',
        component: 'system/notice',
        wrappers: ['@/components/KeepAlive'],
        keppAlive: true,
      },
      {
        name: 'log',
        path: '/system/log',
        component: '@/layouts/TabsLayout',
        routes: [
          {
            path: '/system/log',
            redirect: '/system/log/operlog',
          },
          {
            title: 'menu.system.operLog',
            name: 'operLog',
            path: '/system/log/operlog',
            component: 'monitor/operlog',
            wrappers: ['@/components/KeepAlive'],
            keppAlive: true,
          },
          {
            title: 'menu.system.logininfor',
            name: 'logininfor',
            path: '/system/log/logininfor',
            component: 'monitor/logininfor',
            wrappers: ['@/components/KeepAlive'],
            keppAlive: true,
          },
        ],
      },
    ],
  },
  {
    name: 'monitor',
    path: '/monitor',
    component: '@/layouts/TabsLayout',
    routes: [
      {
        path: '/monitor',
        redirect: '/monitor/online',
      },
      {
        title: 'menu.monitor.online-user',
        name: 'online',
        path: '/monitor/online',
        component: 'monitor/online',
        wrappers: ['@/components/KeepAlive'],
        keppAlive: true,
      },
      {
        title: 'menu.monitor.schedule',
        name: 'job',
        path: '/monitor/job',
        component: 'monitor/job',
        wrappers: ['@/components/KeepAlive'],
        keppAlive: true,
      },
      {
        title: 'menu.monitor.schedule.log',
        name: 'job',
        path: '/monitor/job/log/:id?',
        component: 'monitor/joblog',
        wrappers: ['@/components/KeepAlive'],
        keppAlive: true,
      },
      {
        title: 'menu.monitor.druid',
        name: 'druid',
        path: '/monitor/druid',
        component: 'monitor/druid',
        wrappers: ['@/components/KeepAlive'],
        keppAlive: true,
      },
      {
        title: 'menu.monitor.server',
        name: 'server',
        path: '/monitor/server',
        component: 'monitor/server',
        wrappers: ['@/components/KeepAlive'],
        keppAlive: true,
      },
      {
        title: 'menu.monitor.cache',
        name: 'cache',
        path: '/monitor/cache',
        component: 'monitor/cache',
        wrappers: ['@/components/KeepAlive'],
        keppAlive: true,
      },
    ],
  },
  {
    name: 'tool',
    path: '/tool',
    component: '@/layouts/TabsLayout',
    routes: [
      {
        path: '/tool',
        redirect: '/tool/build',
      },
      {
        title: 'menu.tool.form-builder',
        name: 'build',
        path: '/tool/build',
        component: 'tool/design',
        wrappers: ['@/components/KeepAlive'],
        keppAlive: true,
      },
      {
        title: 'menu.tool.code-gen',
        name: 'gen',
        path: '/tool/gen',
        component: 'tool/gen',
        wrappers: ['@/components/KeepAlive'],
        keppAlive: true,
      },
      {
        title: 'menu.tool.open-api',
        name: 'swagger',
        path: '/tool/swagger',
        component: 'tool/swagger',
        wrappers: ['@/components/KeepAlive'],
        keppAlive: true,
      },
    ],
  },
  {
    component: './404',
  },
];