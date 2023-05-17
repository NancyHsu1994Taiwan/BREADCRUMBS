<script setup></script>

<template>
  <div class="d-flex">
    <ul class="nav">
      <li><RouterLink to="/">Home</RouterLink></li>
      <li>
        <RouterLink to="/about">About</RouterLink>
      </li>
    </ul>
    <RouterView class="view" />
  </div>
</template>

<style>
.d-flex {
  display: flex;
}
.nav {
  width: 20%;
}
.view {
  width: 80%;
}
</style>
