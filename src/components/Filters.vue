<template>
 <!-- 在3.x中，过滤器已删除，不再受支持。相反，我们建议将它们替换为方法调用或计算的属性。 -->
 <!-- 全局过滤器
如果您使用的是全局注册的过滤器，然后在整个应用中使用，则在每个单独的组件中用计算的属性或方法替换它们可能不方便。

相反，您可以通过globalProperties使全局过滤器可用于所有组件： -->

  <div>{{ $filters.currencyUSD('accountBalance') }}</div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
      
  }
};
</script>
