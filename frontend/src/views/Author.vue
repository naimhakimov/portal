<script setup>
import { onMounted, ref } from "vue";
import {getAuthors} from "../services.js";

const authors = ref([]);

onMounted(async () => {
  authors.value = await getAuthors();
});
</script>

<template>
  <div class="p-3">
    <h3>Муалифон</h3>

    <div class="card mb-3" v-for="author in authors" :key="author.id">
      <div class="row g-0">
        <div class="col-md-4 d-flex align-items-center justify-content-center p-2">
           <img v-if="author?.photo" :src="author.photo" class="img-fluid rounded-circle" alt="..." />
          <i v-else class="bi bi-person-fill" style="font-size: 120px;"></i>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <p class="card-text" v-html="author.description"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
