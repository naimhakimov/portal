<script setup>
import pdfFile from "../assets/files/syllabus.pdf";
</script>

<template>
  <div class="p-3">
    <iframe :src="pdfFile" frameborder="0" width="100%" height="100%"></iframe>
  </div>
</template>

