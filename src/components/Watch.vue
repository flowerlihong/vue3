<template>
  <button @click="changeList">改变bookList的值</button>
  <div class="list">{{bookList}}</div>
  <template v-if="disable">
      <div>222222</div>
  </template>
</template>
<script>
export default {
  data() {
    return {
        bookList:['test','join','lily','jack'],
        changeArray:['change1','change2','change3'],
        disable:true
    };
  },
 methods: {
 changeList(){
    //  this.bookList=[...this.changeArray]
     this.bookList.push('test')
 }
  },
  watch: {
  bookList: {
    handler() {
     console.log('handler--')
    },
    deep: true
  },
}
};
</script>
<style lang="scss" scoped>
.list{
  margin-top: 10px;
}
</style>