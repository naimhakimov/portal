<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

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
  <div class="container">
    <h1>{{ params ? 'Супоришоти рузи ' + params : 'Супоришот' }}</h1>

    <div class="home-work" v-if="!params">
      <router-link
        :to="'/home-work/' + (index + 1)"
        v-for="(item, index) in Array(15).fill(1)"
        :key="item"
      >
        <img width="40" src="../assets/images/book.png" alt="" />
        Рузи
        {{ index + 1 }}
      </router-link>
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
  gap: 5px;
  
  a {
    display: flex;
    align-items: center;
    gap: 10px;
  }
}
</style>