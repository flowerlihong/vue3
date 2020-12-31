<template>
   <div>title:{{title}}</div>
   <div>lastName:{{lastName}}</div>
   <div>modelValue:{{modelValue}}</div>
   <div>description:{{description}}</div>
   <!-- v-model的单重绑定 -->
    <input 
      type="text"
      :value="title"
      @input="$emit('update:title', $event.target.value)">
    <!-- v-model的多重绑定 -->
     <!-- <input 
      type="text"
      :value="title"
      @input="$emit('update:title', $event.target.value)">
     <input
      type="text"
      :value="lastName"
      @input="$emit('update:lastName', $event.target.value)"> -->
    <!-- v-model已经内置修饰语- .trim，.number和.lazy。但是，在某些情况下，您可能还想添加自己的自定义修饰符。 -->
    <!-- 自定义修饰符号capitalize -->
    <!-- <div>
      <span>自定义修饰符号capitalize:</span>
      <input
    type="text"
    :value="modelValue"
    @input="emitValue">
    </div> -->
   <!-- 自定义修饰符对于v-model带有参数的绑定，生成的prop名称为arg + "Modifiers" -->
    <!-- <div>
         <span>自定义修饰符对于v-model带有参数的绑定:</span>
        <input type="text" 
      :value="description"
      @input="$emit('update:description', $event.target.value)">
    </div> -->
 
</template>
<script>
export default {
  data() {
    return {};
  },
  created () {
    // this.$emit('myEvent')
  },
//   props: {
//     title: String,
//     lastName: String,
//     // 自定义修饰符号capitalize不带参数
//     modelValue: String,
//     modelModifiers: {
//       default: () => ({})
//     },
//   },
   // 自定义修饰符号capitalize带参数
    // props: ['description', 'descriptionModifiers'],
  emits: ['update:title', 'update:lastName','update:modelValue','update:description'],
  methods: {
    emitValue(e) {
      let value = e.target.value
      if (this.modelModifiers.capitalize) {
        value = value.charAt(0).toUpperCase() + value.slice(1)
      }
      this.$emit('update:modelValue', value)
    }
  },
};
</script>
<style scoped>

</style>
