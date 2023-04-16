<template>
  <footer class="bg-dark">
    <div class="container">
      <p>© {{ new Date().getFullYear() }} Информатикаи амалӣ, Ҳамаи ҳуқуқҳо ҳифз карда шудаанд. </p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  border-radius: 20px 20px 0 0;
  margin: 0 20px;
  background: #333;
  color: white;
  padding: 20px 15px;

  p {
    font-size: 14px;
  }
}
</style>