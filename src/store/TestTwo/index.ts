import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
@Module({ name: 'Two', namespaced: true, stateFactory: true })
export default class Two extends VuexModule {
  public count: number = 12;
  get getCount() {
    return this.count;
  }

  // action 'decr' commits mutation 'decrement' when done with return value as payload
  @Action({ commit: 'decrement' })
  public async decr(v: number) {
    return v;
  }

  @Mutation
  private decrement(delta: number) {
    window.console.log('delta', delta);
    this.count -= delta;
  }

}




















// import { Commit } from 'vuex';

// // 初始数据
// const state: any = {
//   menulist: [],
// };

// const mutations: any = {
//   saveMenuList(states: any, params: object) {
//     state.menulist = params;
//   },
// };

// const actions: any = {
//   saveMenuListFN(context: { commit: Commit }, params: object) {
//     context.commit('saveMenuList', params);
//   },
// };

// export default {
//   namespaced: true, // 仓库模块声明
//   state,
//   mutations,
//   actions,
// };
