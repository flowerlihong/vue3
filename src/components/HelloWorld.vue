<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
     <div v-for="(item, index) in data1" :key="index">
            「{{ index }}：{{ item }}」
    </div>
     <router-link to='/heCheng'> Home</router-link>
  </div>
</template>

<script>
// import Vue from 'vue'
import functions from './function';
export default {
  mixins: [functions],
 data(){
   return {
     id: 2,
     data1:['小红','小明','美丽','小莉'],
     disable:false
   }
  },
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted () {
    // vue3不能用Vue.nextTick---------可以用this.$nextTick
    //  Vue.nextTick(() => {
    //     console.log('helloWorld-----')
    //     console.log('nextTick-----')
    // })
  //  this.$nextTick(() => {
  //   console.log('helloWorld-----')
  //   console.log('nextTick-----')
  //   });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
