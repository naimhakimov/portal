<script setup>
import {onMounted, ref, watch} from "vue";
import {useRoute} from "vue-router";
import {getTasks} from "../services";

const homeWorks = ref([])
const homeWork = ref(null)
const route = useRoute();
const params = ref(route.params.id);

onMounted(async () => {
  homeWorks.value = await getTasks()
  if (route.params.id) {
    homeWork.value = homeWorks.value.find(item => item._id === route.params.id)
  }
})

watch(route, (value) => {
  params.value = value.params?.id;
  if (value.params?.id) {
    homeWork.value = homeWorks.value.find(item => item._id === value.params.id)
  }
});
</script>

<template>
  <div class="p-3">
    <h3>{{ params ? 'Супориши ' + homeWork?.title.toLowerCase() : 'Супоришҳо' }}</h3>

    <div class="home-work" v-if="!params">
      <div
          class="home-work__item p-3 bg-white rounded-4"
          v-for="(item, index) in homeWorks"
          :key="item"
      >
        <i class="bi bi-list-task fs-4"></i>
        <div class="flex-grow-1 fs-5">
          Рузи
          {{ index + 1 }}
        </div>

        <button class="btn btn-primary" @click="$router.push('/home-work/' + item._id)">Кушодан</button>
      </div>
    </div>

    <div class="d-flex flex-column gap-3" v-else>
      <div class="card p-3" v-for="(item, idx) in homeWork?.tasks" :key="idx">
        {{ idx + 1 }}. {{ item }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.home-work {
  display: flex;
  flex-direction: column;
  gap: 10px;

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }
}
</style>