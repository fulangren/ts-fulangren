import YygDrag from './testone.vue';

(YygDrag as any).install = (Vue: any) => Vue.component(YygDrag.name, YygDrag);

export default YygDrag;
