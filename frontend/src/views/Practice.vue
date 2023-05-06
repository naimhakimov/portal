<script setup>
import {ref, onMounted, watch} from "vue";
import {getPractice} from "../services.js";
import {useRoute} from "vue-router";
import {baseURL} from '../plugins/axios.js'

const practice = ref([]);
const practiceById = ref(null);
const route = useRoute()

onMounted(async () => {
  practice.value = await getPractice();

  if (route.params.id) {
    practiceById.value = practice.value.find(p => p._id === route.params.id)
  }
});

watch(route, (value) => {
  if (value.params.id) {
    practiceById.value = practice.value.find(p => p._id === value.params.id)
  }
})
</script>

<template>
  <div class="p-3">
    <div class="p-3">
      <h3>Амали</h3>
      <div class="home-work d-flex flex-column gap-2">
        <div v-if="!route.params.id" class="home-work__item d-flex justify-content-between p-3 bg-white rounded-4"
            v-for="item in practice"
            :key="item._id"
        >
          <div class="flex-grow-1 fs-5">
            {{ item.title }}
          </div>

         <div class="d-flex gap-3">
           <a
               :href="baseURL + item.file"
               target="_blank"
               download
               class="btn btn-success"
           >
             Сабт кардан
           </a>

           <router-link class="btn btn-primary" :to="'/practice/' + item._id">Кушодан</router-link>
         </div>
        </div>
        <template  v-else-if="route.params.id && practiceById">
          <div class="d-flex">
            <button class="btn btn-primary" @click="$router.push('/practice')">Бозгашт</button>
          </div>
          <div class="home-work__item d-block p-3 bg-white rounded-4">
            <h3>{{ practiceById.title }}</h3>
            <iframe :src="baseURL + practiceById.file" frameborder="0" width="100%" height="450px"></iframe>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
