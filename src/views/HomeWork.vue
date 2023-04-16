<script setup>
import {ref, watch} from "vue";
import {useRoute} from "vue-router";

const homeWork = [
  "Аз як компютер ба компютери дигар дар хачми 12 мбайт дар муддати 30 сония маълумот гузаронида шуд. Барои фиристодани 1 Гб маълумот ба мо чӣ кадар вақт лозим аст?",
  "Аз як компютер ба компютери дигар дар хачми 12 мбайт дар муддати 30 сония маълумот гузаронида шуд. Барои фиристодани 1 Гб маълумот ба мо чӣ кадар вақт лозим аст?",
  "Аз як компютер ба компютери дигар дар хачми 12 мбайт дар муддати 30 сония маълумот гузаронида шуд. Барои фиристодани 1 Гб маълумот ба мо чӣ кадар вақт лозим аст?",
];
const route = useRoute();
const params = ref(route.params.id);

watch([route], () => {
  params.value = route.params.id;
});
</script>

<template>
  <div class="p-3">
    <h3>{{ params ? 'Супоришоти рузи ' + params : 'Супоришҳо' }}</h3>

    <div class="home-work" v-if="!params">
      <div
          class="home-work__item p-3 bg-white rounded-4"
          v-for="(item, index) in Array(15).fill(1)"
          :key="item"
      >
        <i class="bi bi-list-task fs-4"></i>
        <div class="flex-grow-1 fs-5">
          Рузи
          {{ index + 1 }}
        </div>

        <button class="btn btn-primary" @click="$router.push('/home-work/' + (index + 1))">Кушодан</button>
      </div>
    </div>

    <div class="d-flex flex-column gap-3" v-else>
      <div class="card p-3" v-for="(item, idx) in homeWork" :key="idx">
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