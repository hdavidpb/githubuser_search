<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import SearchPage from "./pages/SearchPage.vue";
</script>

<template>
  <div class="app_container">
    <search-page />
  </div>
</template>

<style>
body {
  background: url("https://github.githubassets.com/images/modules/site/social-cards/github-social.png")
    no-repeat center center/cover;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.app_container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
