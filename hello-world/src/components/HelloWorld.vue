<template>
  <div>112</div>
  <div>{{ msg }}</div>
</template>

<script setup>
import {
  ref,
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
  watchEffect,
  computed
} from 'vue'

const props = defineProps({
  msg: { require: false, type: String, default: 'jxx' }
})

const data = reactive({})
defineExpose({ ...toRefs(data) })

// import { useStore } from 'vuex'
// import { useRoute, useRouter } from 'vue-router'
/**
 * 仓库
 */
// const store = useStore()
/**
 * 路由对象
 */
// const route = useRoute()
/**
 * 路由实例
 */
// const router = useRouter()
//console.log('1-开始创建组件-setup')
/**
 * 数据部分
 */

onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {
  //console.log('3.-组件挂载到页面之后执行-------onMounted')
  console.log(props.msg, process.env)
})
watchEffect(() => {})
// 使用toRefs解构
// let { } = { ...toRefs(data) }
</script>
<style scoped lang="less">
div {
  background: yellow;
}
</style>
