<script setup>
import useTitle from '@/composables/useTitle'
import { useRouter } from 'vue-router'
const router = useRouter()
useTitle({ value: { title: '404' } })
const goback = () => {
  router.replace('/')
}
</script>
<template>
  <div class="content">
    <div class="title">404</div>
    <div>
      <div class="sub-title">抱歉，您访问的页面不存在！</div>
      <el-button type="primary" size="small" @click="goback"
        >返回首页</el-button
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
.content {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'DIN Alternate';

  .title {
    font-size: 4rem;
    margin-right: 4rem;
  }
  .sub-title {
    font-size: 1.5rem;
    line-height: 1.5rem;
    margin-bottom: 1rem;
  }
}
</style>
