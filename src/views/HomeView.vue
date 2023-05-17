<script setup>
import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
let navData = []
function getBreadCrumbs() {
  console.log(route.matched)
  // navData = route.matched
  navData = route.matched.map((item) => {
    // let obj = {}
    // obj.name = item.name
    // obj.path = item.path
    // obj.pathBefore
    return item.name
  })
  console.log('filter', navData)
}

watchEffect(() => {
  getBreadCrumbs()
})
</script>

<template>
  <router-link
    v-for="(item, index) in navData"
    :key="index"
    :to="{ name: item }"
    class="text-white font-thin text-sm"
  >
    {{ item }}/
  </router-link>
  <ul class="nav">
    <router-link class="d-block" to="/layer01p01">第一層 第一頁</router-link>
    <router-link class="d-block" to="/layer01p02">第一層 第二頁</router-link>
  </ul>
  <router-view class="view"></router-view>
</template>
<style>
.d-block {
  display: block;
}
</style>
