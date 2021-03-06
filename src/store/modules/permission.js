import { baseRoute, asyncRoutes } from '@/router';
import { setCache } from '@/utils/session';
import router, { resetRouter } from '@/router';
const state = {
  routes: []
};

const mutations = {
  SET_ROUTE(state, route) {
    state.routes = baseRoute.concat(route);
  }
};

const actions = {
  getRoute({ commit }, role) {
    return new Promise((resolve, reject) => {
      let accessedRoutes = [];
      if (role == 'admin') {
        accessedRoutes = asyncRoutes;
      } else {
        accessedRoutes = filterAsyncRoute(asyncRoutes, role);
      }
      commit('SET_ROUTE', accessedRoutes);
      resolve(accessedRoutes);
    });
  },
  async changeRole({ commit, dispatch }, role) {
    const token = role + '20201013';
    commit('user/SET_TOKEN', token, { root: true });
    setCache('TOKEN', token);
    await dispatch('user/getInfo', token, { root: true });
    resetRouter();   // 初始化基本路由
    console.log(role);
    const accessedRoutes = await dispatch('getRoute', role);   // 获取角色添加左侧菜单该角色相关路由
    console.log(accessedRoutes);
    router.addRoutes(accessedRoutes);
    await dispatch('tagsView/clearTag', null, { root: true });
  }
};

export function filterAsyncRoute(routes, role) {
  let arr = [];
  routes.forEach(item => {
    const temp = { ...item };
    if (hasChildren(temp, role)) {
      if (temp.children) {
        temp.children = filterAsyncRoute(temp.children, role);
      } 
      arr.push(temp);
    }
  });
  console.log(arr);
  return arr;
}

export function hasChildren(route, role) {
  if (route.meta && route.meta.role) {
    return route.meta.role.some(item => item == role);
  } else {
    return true;
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
