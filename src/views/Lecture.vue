<script setup>
import {ref, onMounted, watch} from "vue";
import {getByKey} from "../services.js";
import {useRoute} from "vue-router";

const lectures = ref([]);
const route = useRoute();
const lecture = ref(null)

onMounted(async () => {
  lectures.value = await getByKey("lectures");
  if (route.params.id) {
    lecture.value = lectures.value.find(l => l.id === route.params.id)
  }
});

watch(route, (value) => {
  if (value.params.id) {
    lecture.value = lectures.value.find(l => l.id === value.params.id)
  }
})
</script>

<template>
  <div class="p-3">
      <h3>Лексияҳо</h3>
      <div class="home-work d-flex flex-column gap-2">
        <div
            v-if="!route.params.id"
            class="home-work__item d-flex justify-content-between p-3 bg-white rounded-4"
            v-for="item in lectures"
            :key="item.id"
        >
          <div class="flex-grow-1 fs-5">
            {{ item.title }}
          </div>

          <div class="d-flex align-items-center gap-3">
            <a :href="item.file" download target="_blank" class="btn btn-success">Сабт кардан</a>
            <router-link
                :to="'/lecture/' + item.id"
                class="btn btn-primary"
            >
              Кушодан
            </router-link>
          </div>
        </div>

        <template v-if="route.params.id && lecture">
          <div class="d-flex">
            <button class="btn btn-primary w-auto" @click="$router.push('/lecture')">Бозгашт</button>
          </div>

          <div class="home-work__item d-block h-100 p-3 bg-white rounded-4">
            <h3>{{ lecture.title }}</h3>
            <iframe
                width="100%"
                height="450px"
                :src="lecture.url + '?embedded=true'"></iframe>
          </div>
        </template>
      </div>
  </div>
</template>
