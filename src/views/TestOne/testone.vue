<template>
  <div class="course">
    <div
      class="contain"
      :id="`drag`+index"
      :ref="`drag`+index"
      draggable="true"
      v-on:dragstart="HandleDragStart"
      v-on:drag="HandleDrag"
      v-on:dragend="HandleDragEnd"
      v-on:dragenter="HandleDragEnter"
      v-on:dragover="HandleDragOver"
      v-on:dragleave="HandleDragLeave" 
      v-on:drop="HandleDrop"
    >
      <span class="info">{{info}}</span>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
@Component({
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
})
export default class YygDrag extends Vue {

  public courseMockData: string[] = [];

  // 初始化数据
  private fromDom: any = null;
  private lastDom: any = null;
  private info: any = null;
  private item: any = null;

  // 计算属性
  get computedMsg() {
    return '667';
  }
  // 处理函数方法
  // 开始拖拽
  protected HandleDragStart(ev: any) {
    // 保护来源,以防回不去
    ev.dataTransfer.setData('dragDom', ev.target.id);
    (this as any).AddClass(ev.target.id, 'drag-color');
  }
  // 拖拽中
  protected HandleDrag(ev: any) {
    (this as any).AddClass(ev.target.id, 'drag-color');
    ev.preventDefault();
  }
  // 被拖动元素   在拖动操作完成时触发
  protected HandleDragEnd(ev: any) {
    (this as any).RemoveClass(ev.target.id, 'drag-color');
  }
  // 拖拽至另外一个div
  protected HandleDragEnter(ev: any) {
    const a = document.getElementsByClassName('drag-color')[0];
    const b =  ev.target;
    if ((a.id === 'drag0' && b.id === 'drag5') || (a.id === 'drag5' && b.id === 'drag0')) {
      this.item = ev.target.id;
      this.info = 'drag0/drag5不换课';
    }
    if ((a.id === 'drag1' && b.id === 'drag3') || (a.id === 'drag3' && b.id === 'drag1')) {
      this.item = ev.target.id;
      this.info = 'drag1/drag3不换课';
    }
  }
  // 在其他元素中移动
  protected HandleDragOver(ev: any) {
    (this as any).AddClass(ev.target.id, 'drag-color');
    ev.preventDefault();
  }
  // 目标元素 当被拖动元素没有放下就离开目的地元素时触发
  protected HandleDragLeave(ev: any) {
    (this as any).RemoveClass(ev.target.id, 'drag-color');
    (this as any).removeInfo();
    ev.preventDefault();
  }

  protected HandleDrop(ev: any) {
    // 只有在可放置的元素上面松开鼠标才会触发drop事件，所以这个dom是被放置的dom节点。
    // 重置toDom，下次拖拽就是新拖拽了，fromDom和lastDom会在dragStart的时候重置
    const data = ev.dataTransfer.getData('dragDom');
    // console.log(document.getElementById(data), event.target, "这两个dom");
    (this as any).RemoveClass(data, 'drag-color');
    (this as any).RemoveClass(ev.target.id, 'drag-color');
    (this as any).swapDom(document.getElementById(data), ev.currentTarget);
  }
  protected swapDom(a: any, b: any) {
    if ((a.id === 'drag0' && b.id === 'drag5') || (a.id === 'drag0' && b.id === 'drag5')) {
      alert('语文课不能和历史课换课');
      (this as any).removeInfo();
      return;
    }
    if ((a.id === 'drag1' && b.id === 'drag3') || (a.id === 'drag3' && b.id === 'drag1')) {
      alert('生物不与数学换课');
      (this as any).removeInfo();
      return;
    }
    this.item = null;
    this.info = null;
    // 交换两个dom元素
    if (a === b) { return; }
    // 记录父元素
    const bp = b.parentNode;
    const ap = a.parentNode;
    // 记录下一个同级元素
    const an = a.nextElementSibling;
    const bn = b.nextElementSibling;
    // 如果参照物是邻近元素则直接调整位置
    if (an === b) { return bp.insertBefore(b, a); }
    if (bn === a) { return ap.insertBefore(a, b); }
    if (a.contains(b)) {
      // 如果a包含了b
      return ap.insertBefore(b, a), bp.insertBefore(a, bn);
    } else {
      return bp.insertBefore(a, b), ap.insertBefore(b, an);
    }
  }
  protected AddClass(id: any, classname: any) {
    (document as any).getElementById(id).classList.add(classname);
  }
  protected RemoveClass(id: any, classname: any) {
    (document as any).getElementById(id).classList.remove(classname);
  }
  protected removeInfo() {
    this.item = null;
    this.info = null;
  }
}
</script>

<style scoped lang="scss">
@import './testone.scss'
</style>
