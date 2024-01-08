/*
 * @Date: 2024-01-08 15:49:05
 * @FilePath: \vite-template\src\composables\useTitle.js
 * @Description: 设置页面title
 */
import { onMounted, watch } from 'vue'

export default function useTitle (route) {
  const setTitle = (title) => {
    if (!title) {
      return
    }
    document.title = title
  }

  watch(route, () => {
    setTitle(route.value.title || '')
  })

  onMounted(() => {
    setTitle(route.value.title)
  })
}
