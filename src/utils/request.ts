import axios, { AxiosRequestConfig, AxiosResponse } from 'taro-axios';
import Taro from '@tarojs/taro';

// @ts-ignore  在 config 中通过 defineConstants 配置的
const baseUrl = HOST;

const instance = axios.create({
  baseURL: baseUrl,
  timeout: 30 * 1000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  const token =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJZdW5Vc2VyR3VpZCI6ImMwMjNmMDMyLWEzNmMtNGQyNC1iMGJhLWU4NzQ0MjY4NDRhNiIsIk5hbWUiOiLova_ku7bnu4QiLCJDb2RlIjoi6L2v5Lu257uEIiwiUm9sZSI6IiIsIkxvZ0lkIjoiV2ViOjEzNzI2MDcxOTI2OjEwLjguMjExLjIxIiwiRGVwYXJ0bWVudCI6IuWNmuWIm-WFrOWPuCIsIkNvbXBhbnlHdWlkIjoiYmYzNGNjOTAtY2ZjMy00ODhmLTk0M2YtYzhjYjA4YjlhOTYyIiwiT3JnSWQiOiJiZjM0Y2M5MC1jZmMzLTQ4OGYtOTQzZi1jOGNiMDhiOWE5NjIiLCJPcmdDb2RlIjoiQTAwMDciLCJSb2xlQ29kZSI6IiIsIlJvbGVOYW1lTGlzdCI6IuWFrOWPuOeuoeeQhuWRmCIsIlVzZXJUeXBlIjoi5Li76LSm5Y-3IiwiVG9rZW5JZCI6Ijc1ZTM1NzJiLWQ3YWEtNDVmZC04MTdmLWIxYjcxMmRjZDVmNyIsIkNvbXBhbnkiOiLljZrliJvlhazlj7giLCJleHAiOjE2NTE5MTQ2NzMsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NjM5NTciLCJhdWQiOiIyYjIxZDYzOC0yOGM3LTRhMjctYTQwYy05NWY1NDRkMTVhOWUifQ.2NBoPPp8RlOnElsxBNR1BLVJ1FOm-EA7pA4qT-qlxEc';
  config.headers = {
    Authorization: token,
    ...config.headers,
  };
  // 后端只接收json数据
  config.data = JSON.stringify(config.data);
  return config;
});
const showToast = (title: string) => {
  Taro.showToast({
    title,
    icon: 'none',
    duration: 3000,
  });
};
const showMessage = (title: unknown = '请求错误') => {
  const message = JSON.stringify(title).replace(/"/g, '');
  // TODO Request failed with status code 500 优化展示逻辑
  if (message.indexOf('Network') > -1) {
    showToast('网络繁忙，请稍后再试');
  } else if (message.indexOf('timeout') > -1) {
    showToast('请求超时');
  } else {
    showToast(message);
  }
};
interface ApiResult<T> {
  Code: number;
  HasError: boolean;
  Message: null | string;
  Result: T;
}
// Taro.showToast 和loading 是单例 所以只有成功时候hideLoading 其他情况showToast
export default function request<T>(options: AxiosRequestConfig = {}) {
  Taro.showLoading({
    title: '加载中...',
  });
  Taro.showNavigationBarLoading();
  return new Promise<T>((resolve, reject) => {
    instance(options)
      .then((response: AxiosResponse<ApiResult<T>>) => {
        if (response?.status === 200 && response?.data?.Code === 0) {
          resolve(response.data.Result);
          Taro.hideLoading();
        } else {
          throw response;
        }
      })
      .catch((result) => {
        if (result?.status === 200 && result?.data?.Code === -1) {
          //重新登陆 result?.data?.Code === -1 ||
        } else {
          // 其他情况 code 非 0 情况 有 message 就显示
          showMessage(result?.data?.Message ?? result?.Message);
        }
        reject(result);
      })
      .finally(() => {
        Taro.hideNavigationBarLoading();
      });
  });
}
