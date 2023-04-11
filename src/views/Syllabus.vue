<script setup>
import pdfFile from '../assets/files/syllabus.pdf';
</script>

<template>
  <div class="container">
    <h1>Силлабус</h1>

    <a :href="pdfFile" download>Сабт кардан</a>
  </div>
</template>


