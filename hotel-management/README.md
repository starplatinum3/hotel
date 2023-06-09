# 酒店预订系统-Vue后台
vue3 + element-plus构建项目，且全面使用组合式API。

  "element-plus": "^1.0.1-beta.21",

  D:\proj\hotel\hotel-management\package.json
  d:
  cd D:\proj\hotel\hotel-management
  npm run serve 	

  http://localhost:9090/

文档
https://acc15t4bm5.feishu.cn/docx/I5GjdbB9BoExBHxxkX9cNZrunXe

该仓库为酒店预订系统的后台，其前台微信小程序和Node.js服务端如下：
> [微信小程序前台](https://github.com/xkcease/hotel-weapp)  

> [Node.js服务端](https://github.com/xkcease/hotel-server)

## 技术栈
- Vue3 
- Vue Router
- Vuex 
- Vue CLI
- Element-Plus
- Sass 
- ES6
- Axios


## 安装与使用
```shell
# 安装依赖
npm install

# 本地运行
npm run serve 	

# 打包
npm run build		
```

## 说明
该后台系统采用vue动态路由来管理权限，分为三个权限：普通、高级、超级；
不同权限所能使用的功能如下：
- 普通管理员：订单管理
- 高级管理员：订单管理、房间管理、小程序信息管理
- 超级管理员：订单管理、房间管理、小程序信息管理、用户管理

## 功能
1.  登录
2.  修改密码
3.  查询用户
4.  添加用户
5.  删除用户
6.  用户权限修改
7.  查询房间
8.  添加房间
9.  更改房间
10. 删除房间
11. 查询未入住订单
12. 查询已入住订单
13. 查询已退房订单
14. 修改订单
15. 删除订单
16. 查看订单详情
17. 办理入住
18. 办理退房
19. 修改价格
20. 主页
21.	酒店简介修改
22. 房间描述修改
23. 实时接收订单

v14.19.3

D:\proj\hotel\hotel-management>node -v
v14.19.3

D:\proj\hotel\hotel-management\src\views\hall\room\RoomList.vue

git remote add github https://github.com/starplatinum3/hotel-management.git

git remote add  zucc  http://gitlab.zucc.edu.cn/hotel/hotel-management.git
git remote add origin git@gitlab.zucc.edu.cn:hotel/hotel-management.git
http://gitlab.zucc.edu.cn/hotel/hotel-management.git
## 目录
```shell
hotel-management
│  .browserslistrc
│  .eslintrc.js
│  .gitignore
│  .prettierrc
│  babel.config.js
│  jest.config.js
│  LICENSE
│  package-lock.json
│  package.json
│  README.md
│  vue.config.js
│
├─public
│      favicon.ico
│      index.html
│
├─src
│  │  App.vue
│  │  main.js
│  │
│  ├─assets
│  │  ├─css
│  │  │      reset.css
│  │  │
│  │  └─scss
│  │          base.scss
│  │          color.scss
│  │          index.scss
│  │
│  ├─components
│  │      Navbar.vue
│  │      SearchFilter.vue
│  │      Sidebar.vue
│  │      SvgIcon.vue
│  │
│  ├─icons
│  │  │  index.js
│  │  │
│  │  └─svg
│  │          home.svg
│  │          hotel.svg
│  │
│  ├─router
│  │      index.js
│  │
│  ├─store
│  │      index.js
│  │
│  ├─utils
│  │      adminRequest.js
│  │      dateTool.js
│  │      guestRequest.js
│  │      http.js
│  │      introRequest.js
│  │      loading.js
│  │      orderRequest.js
│  │      priceRequest.js
│  │      roomRequest.js
│  │      socketIOTool.js
│  │
│  └─views
│      │  404.vue
│      │  Hall.vue
│      │  Login.vue
│      │
│      └─hall
│          │  Home.vue
│          │  ModifyPassword.vue
│          │
│          ├─admin
│          │      AddAdmin.vue
│          │      AdminList.vue
│          │
│          ├─intro
│          │      HotelIntro.vue
│          │      RoomIntro.vue
│          │
│          ├─order
│          │      CheckIn.vue
│          │      CheckOut.vue
│          │      CompletedOrder.vue
│          │      ModifyOrder.vue
│          │      OccupiedOrder.vue
│          │      ReservedOrder.vue
│          │
│          └─room
│                  AddRoom.vue
│                  ModifyPrice.vue
│                  ModifyRoom.vue
│                  RoomList.vue
│
└─tests
    └─unit
            example.spec.js
```

  http://localhost:9090/

