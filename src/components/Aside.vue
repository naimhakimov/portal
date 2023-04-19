<script setup>
import {onMounted, ref, watch} from "vue";
const menuItems = [
  {
    name: "Силлабус",
    link: "/syllabus",
    icon: 'book',
    auth: false
  },
  {
    name: "Лексия",
    link: "/lecture",
    icon: 'file-earmark-pdf-fill',
    auth: false
  },
  {
    name: "Слайд",
    link: "/slide",
    icon: 'file-earmark-ppt-fill',
    auth: true
  },
  {
    name: "Cупоришот",
    link: "/home-work",
    icon: 'list-task',
    auth: false
  },
  {
    name: "Китоб",
    link: "/books",
    icon: 'book-half',
    auth: false
  },
  {
    name: "Амали",
    link: "/practice",
    icon: 'pencil-square',
    auth: true
  },
  {
    name: "Мултимедиа",
    link: "/multimedia",
    icon: 'youtube',
    auth: true
  },
  {
    name: "Cарчашмаҳои иловаги аз сомона",
    link: "/additional-resources",
    icon: 'file-earmark-plus',
    auth: false
  },
  {
    name: "Муалифон",
    link: "/author",
    icon: 'people-fill',
    auth: true
  },
]

const menu = ref(menuItems);
const user = ref(JSON.parse(localStorage.getItem('user'))?.user)

onMounted(() => {
 checkAuth()
})

function checkAuth() {
  if (user.value) {
    menu.value = menu.value.map(item => ({...item, auth: false}))
  } else {
    menu.value = menuItems;
  }
}
function logout() {
  localStorage.clear()
  user.value = null
  checkAuth()
}
</script>

<template>
  <aside class="aside bg-transparent">
    <router-link to="/" class="aside-logo text-dark fs-5">
      <img src="../assets/images/logo.png" alt="">
      Информатикаи амалӣ
    </router-link>
    <ul class="menu-group">
      <form class="d-flex align-items-center gap-2 mb-2">
        <input type="search" class="form-control">
        <button class="btn btn-primary" type="submit">Ҷустуҷӯ</button>
      </form>

      <div v-for="item of menu" :key="item.link">
        <router-link v-if="!item.auth" :to="item.link" active-class="active" class="menu-group__item text-dark">
          <i class="bi" :class="'bi-' + item.icon"></i>
          {{ item.name }}
        </router-link>
      </div>

      <template v-if="!user">
        <router-link to="/login" class="menu-group__item text-white bg-primary">
          <i class="bi bi-box-arrow-in-right"></i>
          Даромадан
        </router-link>
      </template>

      <div v-if="user" @click="logout" class="menu-group__item text-white bg-danger">
        <i class="bi bi-box-arrow-left"></i>
        Баромадан
      </div>
    </ul>
    <div class="d-flex gap-2 align-items-center aside-profile" v-if="user">
      <i class="bi bi-person-circle"></i>
      {{ user.first_name }}
    </div>
  </aside>
</template>

<style scoped lang="scss">
.aside {
  position: fixed;
  top: 0;
  height: 100vh;
  width: 300px;
  min-width: 300px;
  display: flex;
  flex-direction: column;

  &-profile {
    padding: 10px;
  }

  &-logo {
    padding: 5px 5px 5px 15px;
    display: flex;
    align-items: center;
    gap: 6px;
    text-decoration: none;

    img {
      width: 32px;
    }
  }


  .menu-group {
    flex: 1;
    list-style: none;
    margin: 0;
    padding: 10px;
    display: flex;
    flex-direction: column;

    &__item {
      padding: 10px;
      border-radius: 8px;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 10px;

      &:hover {
        background: #d8d8d8;
      }

      &.active {
        background: white;
      }
    }
  }
}
</style>