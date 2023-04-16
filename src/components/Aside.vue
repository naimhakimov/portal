<script setup>
const menu = [
  {
    name: "Силлабус",
    link: "/syllabus",
    icon: 'book'
  },
  {
    name: "Лексия",
    link: "/lecture",
    icon: 'file-earmark-pdf-fill'
  },
  {
    name: "Слайд",
    link: "/slide",
    icon: 'file-earmark-ppt-fill'
  },
  {
    name: "Cупоришот",
    link: "/home-work",
    icon: 'list-task'
  },
  {
    name: "Китоб",
    link: "/books",
    icon: 'book-half'
  },
  {
    name: "Амали",
    link: "/practice",
    icon: 'pencil-square'
  },
  {
    name: "Мултимедиа",
    link: "/multimedia",
    icon: 'youtube'
  },
  {
    name: "Cарчашмаҳои иловаги аз сомона",
    link: "additional-resources",
    icon: 'file-earmark-plus'
  },
  {
    name: "Муалифон",
    link: "/author",
    icon: 'people-fill'
  },
];
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

      <router-link active-class="active" class="menu-group__item text-dark" v-for="item of menu" :to="item.link">
        <i class="bi" :class="'bi-' + item.icon"></i>
        {{ item.name }}
      </router-link>
    </ul>
  </aside>
</template>

<style scoped lang="scss">
.aside {
  position: fixed;
  top: 0;
  height: 100vh;
  width: 300px;
  min-width: 300px;

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