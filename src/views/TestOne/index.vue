<template>
  <div>
    <div class="course-table">
      <table class="table-contain" border=".1em" border-collapse="collapse" cellpadding="1" cellspacing="0"  bordercolor="#99cccc">
        <tr>
          <td>班级</td>
          <td>星期一</td>
          <td>星期二</td>
          <td>星期三</td>
          <td>星期四</td>
          <td>星期五</td>
          <td>星期六</td>
          <td>星期天</td>
        </tr>
        <tr>
          <td>8:30 - 9:15</td>
          <td colspan="7" rowspan="8" class="table-child">
            <table class="table-contain-clild">
              <tr v-for="(v, i) in arr" :key="i">
                <td 
                  class="child-td-sty"
                  v-for="(item, index) in v"
                  :key="parseInt(`${i*arr.length}${index}`)"
                  :index='parseInt(`${i*arr.length}${index}`)'>
                  <yyg-drag 
                    :key="parseInt(`${i*arr.length}${index}`)"
                    :index='parseInt(`${i*arr.length}${index}`)'>{{item}}</yyg-drag>
                </td>
              </tr>
            </table>
          </td>

        </tr>
        <tr>
          <td>9:25 - 10:10</td>
        </tr>
        <tr>
          <td>10:20 - 11:05</td>
        </tr>
        <tr>
          <td>11:15 - 12:00</td>
        </tr>
        <tr>
          <td>14:00 - 14:45</td>
        </tr>
        <tr>
          <td>14:55 - 15:40</td>
        </tr>
        <tr>
          <td>15:50 - 15:35</td>
        </tr>
        <tr>
          <td>15:45 - 16:30</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import YygDrag from './testone.vue';
@Component({
  components: {
    YygDrag,
  },
  props: {
    propMessage: String,
  },
})

export default class MyTest extends Vue {
  // 初始化数据
  public arr: any = [
                    ['语文', '物理', '英语', '生物', '化学', '历史', '地理'],
                    ['数学', '数学', '英语', '生物', '化学', '历史', '地理'],
                    ['英语', '语文', '数学', '生物', '化学', '历史', '地理'],
                    ['生物', '英语', '语文', '生物', '化学', '历史', '地理'],
                    ['自习', '化学', '英语', '生物', '化学', '历史', '地理'],
                    ['政治', '地理', '英语', '生物', '化学', '历史', '地理'],
                    ['自习', '微机', '英语', '生物', '化学', '历史', '地理'],
                    ['自习', '自习', '英语', '生物', '化学', '历史', '地理']];
  public msg: string = '123456';

  // public helloMsg: string = 'Hello,' + this.propMessage
  get string_value() {
    return this.$props.propMessage;
  }
}
</script>

<style scoped lang="scss">
.course-table{
  font-size: .2em;
  border: .2em solid #ccc;
  width: 100%;
  .table-contain,.table-contain-clild{
    width: 100%;
    height: 300px;
    tr{
      width: 100%;
    }
    tr,td{
      text-align: center;
    }
  }
  .table-child{
    margin: 0;
    padding: 0;
  }
}
</style>
