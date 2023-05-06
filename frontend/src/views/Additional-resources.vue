<script setup>
import {ref, onMounted} from "vue";
import {getMaterials} from "../services.js";
import {baseURL} from "../plugins/axios.js";

const resources = ref([]);

onMounted(async () => {
  resources.value = await getMaterials();
});
</script>


<template>
  <div class="p-3">
    <h3>Cарчашмаҳои иловаги аз сомона</h3>
    <div v-for="item in resources" class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4 d-flex align-items-center p-2">
          <img :src="baseURL + item.photo" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text" v-html="item.description"></p>
            <a target="_blank" :href="item.link" class="btn btn-primary">Бештар</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>