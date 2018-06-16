//无数据页面组件
Vue.component('com-nodata', {
  template: '<div id="noData">' +
    '<img class="noDataImg" width="175" :src="imgSrc" />' +
    '<div class="box1">抱歉！您访问的页面失联啦...</div>' +
    '<div @click="refresh()" class="box2">点击刷新</div>' +
    '</div>',
  data: function() {
    return {}
  },
  props: {
    showDot: {
      type: Boolean,
      default: false,
    },
    imgSrc: String,
  },
  methods: {
    refresh: function() {
      this.$emit('refresh');
    }
  }
})

