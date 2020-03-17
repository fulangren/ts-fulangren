# ts + v3 + vuex-modules-decorators + vue-property-decorator + vuex + router + tslint

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### the code snippet of ts rewrite Vue page 
vue.json
```
"tsdemo": {
  "prefix": "ts",
  "body": [
    "<template>",
    "  <div>\n",
    "  </div>",
    "</template>\n",
    "<script lang=\"${1:ts}\">",
    "import Vue from 'vue';",
    "import { Component } from 'vue-property-decorator';",
    "@Component({",
    "  props: {",
    "  },",
    "  components: {",
    "  },",
    "})",
    "export default class MyTest extends Vue {",
    "  // 初始化数据",
    "  private MSG: number = 123;",
    "  private helloMsg: string = 'hello' + this.MSG;",
    "  // 计算属性",
    "  get computedMsg() {",
    "    return '667';",
    "  }",
    "  // 处理函数方法",
    "  protected getImportInfo() {",
    "    alert(123456);",
    "  }",
    "}",
    "</script>\n",
    "<style scoped lang=\"${2:scss}\">\n",
    "</style>\n",
  ],
  "description": "Create vue template of TS"
},
```
### vuex-modules-decorators
> use vuex-modules-decorators 
>> using Module, VuexModule, Mutation, Action in vuex-modules-decorators to design front end warehouse
store/index.ts
```
import Vue from 'vue';
import Vuex from 'vuex';
import Two from './TestTwo/index'; // warehouse of carresponding module

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Two,
  },
});
```
store/TestTwo/index.ts
```
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
@Module({ name: 'Two', namespaced: true, stateFactory: true }) 
// namespace: true  [ Must be set because of modules ]
export default class Two extends VuexModule {
  public count: number = 12; // the data of sub store 
  get getCount() { // handle function
    return this.count;
  }

  // action 'decr' commits mutation 'decrement' when done with return value as payload
  @Action({ commit: 'decrement' })
  public async decr(v: number) {
    return v;
  }

  @Mutation
  private decrement(delta: number) {
    this.count -= delta;
  }
}
```
on the Vue page
```
import store from '../store';
// lead into getModule
import { getModule } from 'vuex-module-decorators';
// lead into Two 
import Two from '../store/TestTwo/index';
// using getModule handle Two 
const two = getModule(Two, store);

using `two` in processing function
protected HandleFun(v: number) {
  two.decr(v); // done means the Action of store  
  // or
  two.decr(v).then((i) => {
    // do something
  })
}
```