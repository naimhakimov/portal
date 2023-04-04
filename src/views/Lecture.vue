<template>
  <div class="container">
    <h1>Лексия</h1>

    <div v-for="item in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]" :key="item">
      <a href="../assets/files/lecture.rar" download>Рузи {{ item }}</a>
    </div>
  </div>
</template>
