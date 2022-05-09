<template>
  <view class="index">
    <Counter />
    <nut-button @click="goNutUi" type="primary">跳转NutUi</nut-button>
    <nut-button @click="goRequest" type="primary">request</nut-button>
    <nut-button @click="goCss" type="primary">css</nut-button>
    test 1
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
  Taro.navigateTo({ url: '/subPackages/moduleA/pages/nutui/index' });
};
const goRequest = () => {
  Taro.navigateTo({ url: '/subPackages/moduleA/pages/request/index' });
};
const goCss = () => {
  Taro.navigateTo({ url: '/pages/css/index' });
};
</script>
