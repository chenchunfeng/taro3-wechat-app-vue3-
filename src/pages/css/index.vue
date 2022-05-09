<template>
  <div class="ellipsis-test ellipsis">测试超行省略fffffffffffffff</div>
  <div class="ellipsis-test multi-ellipsis--l2">
    测试超行省略2行fffffffffffffff测试超行省略2行fffffffffffffff测试超行省略2行fffffffffffffff测试超行省略2行fffffffffffffff
  </div>
  <p>1px</p>
  <div class="van-hairline--top">top</div>
  <div>aaaa</div>
  <div class="van-hairline--surround">surround</div>
  <div>aaaa</div>
  <div class="van-hairline--top-bottom">top-bottom</div>
  <div>bbbb</div>
  <div class="foot safe-area-bottom">
    my is primary
    <nut-button type="primary" block>底部安全区域</nut-button>
  </div>
</template>

<style lang="scss">
.ellipsis-test {
  width: 120px;
}
.foot {
  position: fixed;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  color: $primary-color;
}
</style>
