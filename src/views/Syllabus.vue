<script setup>
import { usePDF, VuePDF } from "@tato30/vue-pdf";

import pdfFile from "../assets/files/syllabus.pdf";

const { pdf, pages, info } = usePDF(pdfFile);
</script>

<template>
  <div class="container">
    <h1>Силлабус</h1>

    <div class="preview" v-for="page in pages" :key="page">
      <VuePDF :pdf="pdf" :page="page" />
    </div>
  </div>
</template>

<style>
.preview {
  display: flex;
  justify-content: center;
}
</style>


