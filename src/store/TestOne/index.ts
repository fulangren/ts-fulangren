// 实例化对象
const store = {
  namespaced: true,
  // 设置全局访问的state对象(状态)
  state: {
  },
  // 实时监听state值的变化(状态的计算属性)
  getters: {
  },
  // 用于改变状态
  mutations: {
  },
  // 可包含异步操作的mutations
  actions: {
  },
  // 数据保存在local中
  // plugins: [createPersistedState()]

};

export default store;
