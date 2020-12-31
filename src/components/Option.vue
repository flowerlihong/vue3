<template>
   <!-- v-model的单重绑定 -->
   <send-option v-model:title="bookTitle"></send-option>
   <!-- v-model的多重绑定 -->
    <!-- <send-option v-model:title="bookTitle" v-model:last-name="lastName"></send-option> -->
     <!-- 自定义修饰符号capitalize -->
    <!-- <send-option v-model.capitalize="myText"></send-option> -->
   <!-- 自定义修饰符对于v-model带有参数的绑定，生成的prop名称为arg + "Modifiers" -->
    <!-- <send-option v-model:description.capitalize="description"></send-option> -->
</template>
<script>
import SendOption from '../children/Option.vue'
export default {
  data() {
    return {
    bookTitle:'bookTitle',
    lastName:'lastName',
    myText:'modelValue',
    description:'description'
    };
  },
  components: {
    SendOption
  },
  methods: {
//    doSomething(){
//      console.log('doSomething----')  
//    }   
  }
};
</script>
