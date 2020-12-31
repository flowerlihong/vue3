<template>
<!-- 该setup选项应该是可以接受的功能props和context我们将谈论以后。此外，我们返回的所有内容都setup将暴露给组件的其余部分（计算属性，方法，生命周期挂钩等）以及组件的模板。 -->
   <div>
     新增的api有：toRefs,ref,watch,onMounted,computed，“
import { toRefs,ref,watch,onMounted,computed } from 'vue'”
   </div>
   <div class="setupTest">
      <div>setup：{{repositories}}</div>
       <div>repositoriesComputed：{{repositoriesComputed}}</div>
   </div>
   <button @click="$emit('changeUser')">改变user的值</button>
</template>
<script>
import { toRefs,ref,watch,onMounted,computed } from 'vue'
export default {
  data() {
    return {
    
    };
  },
  props: {
    setup: {
      type: String,
      required: true
    },
    user: {
      type: String,
      required: true
    }
  },
  emits: ['changeUser'],
  setup(props) {
    console.log(props) // { setup: 'setup' }
  // repositories变量没有反应性，所以还不能正常工作。这意味着从用户的角度来看，存储库列表将保持空白。让我们解决这个问题！
  // 我们可以使用新ref函数使任何变量在任何地方具有反应性
  let repositories = ref([])  //{value:[]}
  // toRefs顶部使用了setup。这是为了确保我们的观察者会对user道具的更改做出反应。
  let { user } = toRefs(props)
   console.log('toRefs----')
   console.log(user)
  const getUserRepositories = async () => {
      repositories.value =props.user
      // console.log('repositories---')
      // console.log(repositories)
      console.log('repositories---')
      console.log(repositories)
      console.log(repositories.value)
  }
  // onMounted和生命周期挂钩mounted是一样的
  onMounted(getUserRepositories)
  watch(user, getUserRepositories)
  const repositoriesComputed = computed(() => {
    return repositories.value
  })
  return {
    repositories,
    getUserRepositories,
    repositoriesComputed,
  }
  },
};
</script>
<style scoped>
 .setupTest{
   background-color: aliceblue;
   margin: 20px 0;
 }
</style>
