<script setup>
import {ref, onMounted} from "vue";
import {getByKey} from "../services.js";

const resources = ref([]);
onMounted(async () => {
  resources.value = await getByKey("resources");
});
</script>


<template>
  <div class="p-3">
    <h3>Cарчашмаҳои иловаги аз сомона</h3>
      <div v-for="item in resources" class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4 d-flex align-items-center p-2">
            <img :src="item.img" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">{{ item.description }}</p>
              <a target="_blank" :href="item.link" class="btn btn-primary">Бештар</a>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<style lang="scss">
.card-img-top {
}
</style>