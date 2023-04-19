<script setup>
import { onMounted, ref } from "vue";
import { getByKey } from "../services.js";
const authors = ref([]);
onMounted(async () => {
  authors.value = await getByKey("authors");
});
</script>

<template>
  <div class="p-3">
    <h3>Муалифон</h3>

    <div class="card mb-3" v-for="author in authors" :key="author.id">
      <div class="row g-0">
        <div class="col-md-4 d-flex align-items-center justify-content-center p-2">
          <i class="bi bi-person-fill" style="font-size: 120px;"></i>
          <!-- <img :src="author.id" class="img-fluid rounded-start" alt="..." /> -->
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <p class="card-text" v-html="author.about"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
