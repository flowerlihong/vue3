<template>
  <sui data-status="activated" @change="showChange"></sui>
</template>
<script>
import sui from "../children/SuiPian.vue";
export default {
  data() {
    return {};
  },
  components: {
    sui,
  },
 methods: {
    showChange(event) {
      console.log('showChange-----')
      console.log(event.target.value)
    }
  }
};
</script>
