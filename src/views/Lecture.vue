<script setup>
import {ref, onMounted} from "vue";
import {getByKey} from "../services.js";

const lectures = ref([]);
onMounted(async () => {
  lectures.value = await getByKey("lectures");
});
</script>

<template>
  <div class="p-3">
    <h3>Лексияҳо</h3>
    <div class="p-3">
      <div class="home-work d-flex flex-column gap-2">
        <div
            class="home-work__item d-flex justify-content-between p-3 bg-white rounded-4"
            v-for="(item, index) in lectures"
            :key="item.id"
        >
          <div class="flex-grow-1 fs-5">
            {{ item.title }}
          </div>

          <a
              :href="item.file"
              download
              class="btn btn-primary"
          >
            Сабт кардан
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
