<template>
   <div>
       Vue.js中最常用的两个指令是v-if和v-for。因此，当开发人员想同时使用两者时就不足为奇了。尽管不建议这样做，但有时可能需要这样做，因此我们想提供有关其工作方式的指南。
   </div>
   <div>
     <span style="color:red">2.x语法:</span>
     在2.x中，当在同一元素上使用v-if和v-for时，v-for将优先使用。
   </div>
   <div>
     <span style="color:red">3.x语法:</span>
     在3.x中，v-if优先级始终高于v-for。
   </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
