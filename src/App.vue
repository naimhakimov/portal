<script setup>
import Footer from "./components/Footer.vue";
import Aside from "./components/Aside.vue";
</script>

<template>
  <main class="v-container">
    <Aside/>
    <div class="router-view">
      <div class="d-flex flex-column h-100">
        <RouterView style="flex: 1"/>
        <Footer/>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  position: relative;
  display: flex;
  max-width: 1200px;
  margin: 0 auto;

  .router-view {
    margin-left: 300px;
    height: 100vh;
    flex: 1 1 auto;

    &__img {
      max-width: 100%;
    }
  }
}
</style>