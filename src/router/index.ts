import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
import store from '@/store';

import Home from '@/views/Home';
// import Login from '@/views/Login';
import Layout from '@/views/Layout';
import NotFound from '@/views/NotFound';
Vue.use(Router);

// 路由配置接口，继承RouteConfig
export declare  interface IRouterConfig extends RouteConfig {
  name: string; // 路由显示文本
  icon?: string; // 路由icon（iconfont的className）
  sort?: number; // 路由排序
  // hasSaved?: boolean; // 是否被收藏
  // isRecord?: boolean; // 是否记录访问记录
  text?: string; // 路由显示文本
  // parentName?: string; // 父级路由名称
  // hideSubMenu?: boolean; // 是否隐藏子菜单
  // isInvented?: boolean; // 是否是虚拟路径（没有实际业务，在子菜单中不可选中）
  // parent?: IVueRouterConfig; // 父级路由配置（不可配置，自动生成）
  // hide?: boolean; // 是否在菜单中显示（默认为false）
  // isMainModule?: boolean; // 是否是主要模块目录（不可配置，自动生成）
  // inProductList?: boolean; // 是否在产品列表中显示（不可配置，自动生成）
}

class RouterBuilder {
  public router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior: () => ({ x: 0, y: 0 })
  });

  // 全部 examples 的路由列表
  private routerList:any[] = [];

  // 左侧菜单栏数据列表
  private menuList:any[] = [];

  // examples 的种类
  private categoryList:any[] = [];

  constructor() {
    // 获取全部 example 文件
    const routerFiles = require.context('@/views/examples', true, /router.js/);

    // 构建 example 下的子路由，构建左侧菜单栏 menuList 列表
    routerFiles.keys().forEach((item) => {
      const routerFile = routerFiles(item).default;

      const paths = item.split('/');
      const category = paths[1];
      const examName = paths[2];

      if (this.categoryList.indexOf(category) === -1) {
        this.categoryList.push(category);
        this.routerList.push({
          path: `${category}`,
          redirect: `${category}/${examName}`
        });
      }

      this.routerList.push({
        path: `${category}/${examName}`,
        name: routerFile.name,
        component: () => import(`@/views/examples/${category}/${examName}`)
      });

      const categoryMenu = this.menuList.filter((menu) => menu.name === category);

      if (categoryMenu.length == 0) {
        let icon = '';
        switch (category) {
          case 'vue':
            icon = 'el-icon-orange';
            break;
          case 'svg':
            icon = 'el-icon-cherry';
            break;
          case 'css3':
            icon = 'el-icon-grape';
            break;
          case 'canvas':
            icon = 'el-icon-watermelon';
            break;
          case 'html5':
            icon = 'el-icon-sugar';
            break;
          default:
            icon = 'el-icon-ice-creame-square';
        }
        this.menuList.push({
          name: category,
          icon,
          // path: `/examples/${category}/${examName}`,
          children: []
        });
      }

      this.menuList
        .filter((menu) => menu.name === category)[0]
        .children.push({
          name: routerFile.name,
          path: `/examples/${category}/${examName}`,
          sort: routerFile.sort
        });
    });

    // 重新排序
    let menuListCateSort:any[] = []
    menuListCateSort[0]=this.menuList[2]
    menuListCateSort[1]=this.menuList[0]
    menuListCateSort[2]=this.menuList[1]
    this.menuList=menuListCateSort;

    this.menuList.forEach((cate: any) => {
      // 每个分类下的 examples 按照 router 里配置的 sort 排序
      cate.children = cate.children.sort((a: any, b: any) => {
        return a.sort - b.sort;
      });
    });

    store.commit('setMenuList', this.menuList);
    store.commit('setCategoryList', this.categoryList);

    // 动态增加页面路由
    this.router.addRoutes([
      {
        path: '/',
        name: 'home',
        component: Home
      },
      // {
      //   path: '/login',
      //   name: 'login',
      //   component: Login
      // },
      {
        path: '/examples',
        name: 'examples',
        component: Layout,
        children: this.routerList
      },
      {
        path: '/404',
        name: '404',
        component: NotFound
      },
      { path: '*', redirect: { name: '404' } }
    ]);
  }
}

export default new RouterBuilder().router;
