<script setup>
import {books} from "../config/resources";
</script>

<template>
  <div class="p-3">
    <h3>Китобҳо</h3>

    <div class="card mb-3" v-for="book in books" :key="book.img">
        <div class="row g-0">
          <div class="col-md-4 d-flex align-items-center p-2">
            <img :src="book.img" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ book.name }}</h5>
              <p class="card-text">{{ book.description }}</p>
              <p class="card-text"><b>Автор:</b> {{ book.author }}</p>
              <a target="_blank" :href="book.file" :download="book.file" class="btn btn-primary">Боргирӣ кардан</a>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
