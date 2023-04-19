<script setup>
import {ref, onMounted} from "vue";
import {getByKey} from "../services.js";

const practice = ref([]);
onMounted(async () => {
  practice.value = await getByKey("practices");
});
</script>

<template>
  <div class="p-3">
    <div class="p-3">
      <h3>Амали</h3>
      <div class="home-work d-flex flex-column gap-2">
        <div
            class="home-work__item d-flex justify-content-between p-3 bg-white rounded-4"
            v-for="(item, index) in practice"
            :key="item.id"
        >
          <div class="flex-grow-1 fs-5">
            {{ item.title }}
          </div>

          <a
              :href="item.file"
              target="_blank"
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
