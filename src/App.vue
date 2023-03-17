<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
</script>

<template>
  <main>
    <Header></Header>
    <div class="router-view container">
      <RouterView />
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;

  .router-view {
  }
}
</style>