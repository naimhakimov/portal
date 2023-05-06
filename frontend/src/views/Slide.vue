<script setup>
import {ref, onMounted, watch} from "vue";
import {getSlides} from "../services.js";
import {useRoute} from "vue-router";
import {baseURL} from '../plugins/axios.js'

const dataList = ref([]);
const route = useRoute();
const data = ref(null)

onMounted(async () => {
  dataList.value = await getSlides();
  if (route.params.id) {
    data.value = dataList.value.find(l => l._id === route.params.id)
  }
});

watch(route, (value) => {
  if (value.params.id) {
    data.value = dataList.value.find(l => l._id === value.params.id)
  }
})
</script>

<template>
  <div class="p-3">
    <h3>Слайдхо</h3>
    <div class="home-work d-flex flex-column gap-2">
      <div
          v-if="!route.params.id"
          class="home-work__item d-flex justify-content-between p-3 bg-white rounded-4"
          v-for="item in dataList"
          :key="item._id"
      >
        <div class="flex-grow-1 fs-5">
          {{ item.title }}
        </div>

        <div class="d-flex align-items-center gap-3">
          <a :href="baseURL + item.file" download target="_blank" class="btn btn-success">Сабт кардан</a>
          <router-link
              :to="'/slide/' + item._id"
              class="btn btn-primary"
          >
            Кушодан
          </router-link>
        </div>
      </div>


      <template v-if="route.params.id && data">
        <div class="d-flex">
          <button class="btn btn-primary w-auto" @click="$router.push('/slide')">Бозгашт</button>
        </div>

        <div class="home-work__item d-block h-100 p-3 bg-white rounded-4">
          <h3>{{ data.title }}</h3>
          <iframe
              width="100%"
              height="450px"
              :src="baseURL + data.file"></iframe>
        </div>
      </template>
    </div>
  </div>
</template>
