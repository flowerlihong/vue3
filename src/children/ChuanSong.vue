<template>
<teleport to="#model">
  <div>传送html到id为model的元素下（index.html）</div>
</teleport>
<!-- 常见的用例场景是可重用的<Modal>组件，其中可能同时有多个实例处于活动状态。对于这种情况，多个<teleport>组件可以将其内容安装到同一目标元素。顺序将是一个简单的追加-以后的安装将在目标元素内的前面的安装之后。 -->
<!-- <teleport to="#model">
  <div>A</div>
</teleport>
<teleport to="#model">
  <div>B</div>
</teleport> -->
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>

</style>
