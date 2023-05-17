<template>
  <div class="">
    <h1>第二層 第二頁</h1>
    <ul class="nav">
      <li>
        <router-link to="/layer01p01/layer02p02/layer03p01" class="d-block"
          >第三層 第一頁</router-link
        >
      </li>
      <li>
        <router-link to="/layer01p01/layer02p02/layer03p02" class="d-block"
          >第三層 第二頁</router-link
        >
      </li>
      <li>
        <router-link to="/layer01p01/layer02p02/layer03p03" class="d-block"
          >第三層 第三頁</router-link
        >
      </li>
    </ul>
    <router-view class="view"></router-view>
  </div>
</template>
