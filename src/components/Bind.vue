<template>
   <!-- 2.x语法 -->
   <!-- 在2.x中，如果元素同时v-bind="object"定义了相同的单个属性，则单个属性将始终覆盖object。 -->
   <div>
     <!-- template -->
   <div id="red2" v-bind="{ id: 'blue2' }">Vue2template</div>
     <!-- result -->   
    <div id="red2">Vue2result</div>
   </div>
   <!-- 3.x语法 -->
   <!-- 在3x中，如果元素既v-bind="object"定义了属性又定义了相同的单个属性，则绑定的声明顺序决定了如何合并它们。换句话说，现在开发人员不再假设开发人员希望单个属性始终覆盖定义的内容，而是object对所需的合并行为具有更多的控制权。 -->
   <!-- template -->
<div id="red3" v-bind="{ id: 'blue3' }">Vue3template(v-bind在后)</div>
<!-- result -->
<div id="blue3">Vue3result(v-bind在后)</div>

<!-- template -->
<div v-bind="{ id: 'blue4' }" id="red4">Vue3template(v-bind在前)</div>
<!-- result -->
<div id="red4">Vue3result(v-bind在前)</div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
