<template>
  <div @click="getImportInfo(1)">
6666666
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import store from '../store';
import { Component } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import Two from '../store/TestTwo/index';
const two = getModule(Two, store);
@Component({
  props: {
    // index: {
    //   type: Number,
    //   required: true,
    // },
  },
  components: {
  },
})
export default class About extends Vue {
  // 初始化数据
  private MSG: number = 123;
  private helloMsg: string = 'hello' + this.MSG;

  // 计算属性
  get computedMsg() {
    return '667';
  }
  // 处理函数方法
  protected getImportInfo(v: number) {
    two.decr(v).then((i) => {
      window.console.log('i', i);
      window.console.log(two.getCount);
      window.console.log(this.$store.getters['Two/getCount']);
    });
  }
}
</script>

<style scoped lang="scss">

</style>
