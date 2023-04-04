<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <main>
    <Header />
    <div class="router-view">
      <RouterView />
    </div>

    <Footer />
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .router-view {
    flex: 1 1 auto;
    padding: 0 0 15px 0;
  }
}
</style>