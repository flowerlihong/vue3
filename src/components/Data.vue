<template>
   <!-- 1.data组件选项声明不再接受纯JavaScriptobject并需要function声明。 -->
   <!-- <img alt="Vue logo" src="../assets/dataVue2.png">
   <img alt="Vue logo" src="../assets/dataVue3.png"> -->
   <!-- 2.合并data来自mixin或扩展的多个返回值时，合并现在较浅而不是较深（仅合并了根级属性）。 -->
  <div>
     <span>id:{{id}}</span>
     <span>data1:{{data1}}</span>
     <span @click="change()">name:{{name}}</span>
  </div>
</template>
<script>
import functions from './function';
export default {
   mixins: [functions],
   data(){
   return {
     id: 2,
     data1:['小红','小明','美丽','小莉'],
   }
  },
  methods: {
    
  }
};
</script>
