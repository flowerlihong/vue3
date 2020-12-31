<template>
<!-- vue2的"template"标签 -->
<div>
    <span style="color:red">vue2:</span>
    "template"标签上有没有特殊指令（v-if/else-if/else，v-for或v-slot）都会显示里面的内容，在DOM结构不存在template标签。
</div>
<!-- vue3的"template"标签 -->
<div>
   <span style="color:red">vue3:</span>
   "template"没有特殊指令（v-if/else-if/else，v-for或v-slot）的标记现在被视为普通元素，不显示标签里面的内容，在DOM结构中存在template标签。
</div>
  <template v-if="disable">
      <div>222222</div>
  </template>
</template>
<script>
export default {
  data() {
    return {
        disable:true
    };
  },
};
</script>
<style lang="scss" scoped>
.list{
  margin-top: 10px;
}
</style>