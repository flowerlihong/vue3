<template>
  <emits v-on:click="handleClick"></emits>
</template>
<script>
import emits from "../children/Emit.vue";
export default {
  data() {
    return {};
  },
  components: {
    emits,
  },
  methods: {
      handleClick(){
        console.log('handleClick')
      }
  }
};
</script>
