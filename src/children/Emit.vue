<template>
<!-- Vue 3现在提供了一个emits选项，类似于现有props选项。此选项可用于定义组件可以向其父对象发出的事件 -->
<!-- 强烈建议您使用记录每个组件发出的所有事件emits。
这一点特别重要，因为去除了.native修饰剂。emits现在，未使用声明的事件的所有侦听器都将包含在组件的中$attrs，默认情况下，该侦听器将绑定到组件的根节点 -->
<!-- vue2中的native:要将本地DOM侦听器添加到子组件的根元素中，.native可以使用修饰符 -->
<!-- 列子：<my-component
  v-on:close="handleComponentEvent"
  v-on:click.native="handleNativeClickEvent"
/> -->
<!-- 现在将触发两次：
一次$emit()。
一旦从本机事件侦听器应用到根元素。
在这里，您有两个选择：
正确声明click事件。如果您确实确实向中的事件处理程序添加了一些逻辑，这将很有用<emits>。
取消事件的重发，因为父级现在可以轻松地监听本机事件，而无需添加.native。当您真的只重新发送该事件时，此方法适用。
＃ 也可以看看 -->
    <!-- <div>
    <p>{{ text }}</p>
    <button v-on:click="$emit('accepted')">OK</button>
  </div> -->
   <button v-on:click="$emit('click', $event)">OK</button>
</template>
<script>
export default {
  data() {
    return {};
  },
 emits: [''] 
//   props: ['text'],
//   emits: ['accepted']
};
</script>
<style scoped>

</style>
