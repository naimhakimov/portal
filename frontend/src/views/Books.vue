<script setup>
import {ref, onMounted} from "vue";
import {getBooks} from "../services.js";
import {baseURL} from "../plugins/axios.js";

const books = ref([]);
onMounted(async () => {
  books.value = await getBooks();
});
</script>

<template>
  <div class="p-3">
    <h3>Китобҳо</h3>

    <div class="card mb-3" v-for="book in books" :key="book.img">
      <div class="row g-0">
        <div class="col-md-4 d-flex align-items-center p-2">
          <img :src="baseURL + book.photo" class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ book.title }}</h5>
            <p class="card-text" v-html="book.description"></p>
            <a
              target="_blank"
              :href="baseURL + book.file"
              download
              class="btn btn-primary"
              >Боргирӣ кардан</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
