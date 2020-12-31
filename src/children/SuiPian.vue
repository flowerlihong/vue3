<template>
<!-- vue3删掉listeners,$attrs包含属性和事件 -->
<img alt="Vue logo" src="../assets/deleteListener.png">
<!-- vue2在$attrs中不包含class和style,vue3在$attrs中包含class和style -->
<img alt="Vue logo" src="../assets/containClass1.png">
<img alt="Vue logo" src="../assets/containClass2.png">

<!-- vue3中的$attrs： -->
<!-- 单个根节点组件自动继承父节点的属性和方法，多个根节点要指定v-bind="$attrs"才会继承父节点的属性 -->
<!-- 组件的非prop属性是传递给组件的属性或事件侦听器，但没有在props或emit中定义的相应属性。常见的例子包括class，style，和id属性。您可以通过$attrs属性访问这些属性 -->
<!-- 如果您不希望组件自动继承属性，则可以inheritAttrs: false在组件的选项中进行设置。禁用属性继承的常见方案是需要将属性应用于根节点以外的其他元素。 -->
    <div class="date-picker">
       <input type="datetime"/>
    </div>
    <select>
      <option value="1" v-bind="$attrs">Yesterday</option>
      <option value="2">Today</option>
      <option value="3">Tomorrow</option>
    </select>
</template>
<script>
export default {
  data() {
    return {};
  },
  inheritAttrs: false,
  created() {
    console.log('attrs------')
    console.log(this.$attrs) 
  },
};
</script>
<style scoped>

</style>
