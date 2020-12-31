<template>
<!-- setup api -->
<he-cheng :setup="setup" :user="user" @changeUser="changeUser"></he-cheng>
<!-- <ref></ref> -->
</template>
<script>
import HeCheng from '../children/heChengCate.vue/Setup'
// import Ref from '../children/heChengCate.vue/Ref'
export default {
  data() {
    return {
      setup:'setup',
      user:'user'
    };
  },
   components: {
    HeCheng,
    // Ref,
  },
  methods: {
  changeUser(){
   this.user = 'userInfo'
  } ,
  }
  // mounted () {
  //   console.log('mounted----')
  //   console.log(this.user)
  // },
};
</script>
