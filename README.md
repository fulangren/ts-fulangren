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
```
vue.json

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