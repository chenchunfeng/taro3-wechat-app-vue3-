<template>
  <view class="index">
    <Counter />
    <nut-button @click="goNutUi" type="primary">跳转NutUi</nut-button>
    123
  </view>
</template>

<script lang="ts">
import './index.scss';
import Counter from '../../components/Counter.vue';

export default {
  name: 'IndexItem',
  components: {
    Counter,
  },
};
</script>

<script lang="ts" setup>
import Taro from '@tarojs/taro';
const goNutUi = () => {
  Taro.navigateTo({ url: '/moduleA/pages/nutui/index' });
};
</script>
