<template>
   <div class="ordination">
      <div>
        <!-- 目前::v-deep仍支持使用as作为组合器，但已将其视为已弃用，并会发出警告。 -->
        <div>1.深度选择器(:: v-deep 简写(:deep))</div>
      <van-checkbox
            v-model="isChecked"
            :label-disabled="true"
            shape="square"
            class="checkPink"
          >
            <div class="checkYue" @click="gotoAgreement">我已阅读并同意隐私政策</div>
       </van-checkbox>
      </div>
      <div>2.定位广告位内容(:: v-slotted 简写(:slotted))</div>
      <div>3.一次性全局规则(:: v-global 简写(:global))</div>
   </div>
</template>
<script>
import { Checkbox } from 'vant';
export default {
  data() {
    return {
      isChecked:true,
    };
  },
  components: {
    [Checkbox.name]: Checkbox,
  },
};
</script>
<style scoped lang="scss">
.ordination{
  display: flex;
  flex-direction: column;
}
// 深度选择器
// 以前的写法,为已弃用，并会发出警告
// .checkPink ::v-deep {
//   align-self: start;
//   height: 70px !important;
//   .van-icon {
//     border: 1px solid pink !important;
//     border-radius: 2px;
//   }
//   .van-checkbox__icon--checked .van-icon {
//     color: pink;
//   }
//   .checkYue {
//     color: pink;
//   }
// }
// VUE3的写法
//  ::v-deep(.checkPink) {
//   align-self: start;
//   height: 70px !important;
//   .van-icon {
//     border: 1px solid pink !important;
//     border-radius: 2px;
//   }
//   .van-checkbox__icon--checked .van-icon {
//     color: pink;
//   }
//   .checkYue {
//     color: pink;
//   }
// }
// VUE3的简写
 :deep(.checkPink) {
  align-self: start;
  height: 70px !important;
  display: flex;
    justify-content: center;
  .van-icon {
    border: 1px solid pink !important;
    border-radius: 2px;
  }
  .van-checkbox__icon--checked .van-icon {
    color: pink;
  }
  .checkYue {
    color: pink;
  }
}
</style>
