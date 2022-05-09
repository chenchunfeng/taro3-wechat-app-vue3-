<template>
  <p>测试的接口请求</p>
  <button @click="success">请求code为0接口</button>
  <!-- <button @click="error">请求非code为0接口</button>
  <button @click="fail">请求状态码非200接口</button>
  <button @click="empty">服务器不存在</button> -->

  <div>下拉加载试试</div>
</template>

<script lang="ts" setup>
import Taro, { useDidShow, usePullDownRefresh, useShareAppMessage } from '@tarojs/taro';
import { getProjectList } from '@/api/test';

useDidShow(() => {
  console.log('useDidShow');
  success();
});
const success = async () => {
  const result = await getProjectList({
    CurrentPage: 1,
    PageSize: 20,
    ProjectName: '',
    ascDesc: 'DESC',
    orderBy: 'CreatedDate',
  });
  console.log(result);
};

usePullDownRefresh(() => {
  Taro.vibrateShort();
  // try {
  //   await error();
  // } finally {
  //   Taro.stopPullDownRefresh();
  // }
});
useShareAppMessage((res) => {
  if (res.from === 'button') {
    // 来自页面内转发按钮
    console.log(res.target);
  }
  return {
    title: '自定义转发标题',
    path: '/page/user?id=123',
  };
});
</script>
