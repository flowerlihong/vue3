<template>
  <div class="cate">目录</div>
  <div class="first">一.新增功能</div>
  <div class="flex">
     <router-link to="/heCheng">1.合成api</router-link>
     <router-link to="/chuanSong">2.传送</router-link>
     <router-link to="/suiPian">3.碎片</router-link>
     <router-link to="/option">4.发出组件选项</router-link>
     <router-link to="/ordination">5."style scoped"可以包括全局规则或者仅针对广告为内容的规则</router-link>
  </div>
  <div class="second">二.重大变化</div>
  <div class="flex">
     <router-link to="/global">1.新的全局API</router-link>
     <router-link to="/for">2.v-if和v-for在同一元素上使用时的优先级已更改</router-link>
     <router-link to="/bind">3.v-bind的绑定顺序将影响渲染结果</router-link>
     <router-link to="/" class="gray">4.functional 属性已移除 (vue2作用在template)</router-link>
     <router-link to="/emit">5.使用emits选项声明组件事件</router-link>
  </div>
  <div class="third">三.其它小的变化</div>
  <div class="flex">
     <router-link to="/" class="gray">1.在destroyed生命周期的选项已更名为unmounted,beforeDestroy生命周期的选项已更名为beforeUnmount</router-link>
     <router-link to="/data">2.关于data的变化</router-link>
     <router-link to="/" class="gray">3.在v-enter过渡类已重命名为v-enter-from和v-leave过渡类已更名为v-leave-from</router-link>
     <router-link to="/" class="gray">4."transition-group" 现在默认情况下不呈现任何包装元素</router-link>
     <router-link to="/watch">5.当观看数组时，回调仅在替换数组时触发。如果需要触发突变，则需要添加deep: true</router-link>
       <!-- <transition-group tag="span">
     </transition-group> -->
     <router-link to="/template">6."template"标签的改变</router-link>
  </div>
  <div class="fouth">四.删除的api</div>
  <div class="flex">
    <router-link to="/" class="gray">1.v-on不再支持使用数字作为修饰符,config.keyCodes不再受支持</router-link>
    <router-link to="/" class="gray">2.$ on，$ off和$ once实例方法</router-link>
    <router-link to="/filters" >3.filters不再支持</router-link>
    <router-link to="/" class="gray">4.内联模板属性（inline-template）</router-link>
    <!-- <my-component inline-template>
       <p>These are compiled as the component's own template.</p>
    </my-component> -->
    <router-link to="/" class="gray">5.$children实例属性（this.$children访问子组件）</router-link>
    <router-link to="/" class="gray">6.$destroy实例方法，用户不应再手动管理各个Vue组件的生命周期</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.cate{
  font-weight: 800;
   color: red;
}
.first{
  margin-top: 10px;
  color: red;
}
.second{
  margin-top: 10px;
  color: red;
}
.third{
  margin-top: 10px;
  color: red;
}
.flex{
  display: flex;
  flex-direction: column;
}
.gray{
  color: gray;
}
a{
  margin-top: 10px;
}
</style>
