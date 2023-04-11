<script setup>
import { ref } from "vue";

const menu = [
  {
    name: "Силлабус",
    link: "/syllabus",
  },
  {
    name: "Лексия",
    link: "/lecture",
  },
  {
    name: "Слайд",
    link: "/slide",
  },
  {
    name: "Cупоришот",
    link: "/home-work",
  },
  {
    name: "Амали",
    link: "/practice",
  },
  {
    name: "Муалифон",
    link: "/author",
  },
  {
    name: "Китоб",
    link: "/books",
  },
  {
    name: "Мултимедиа",
    link: "/multimedia",
  },
];

const isShow = ref(false);

function toggle() {
  isShow.value = !isShow.value;
}
</script>

<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <router-link to="/" class="logo">
          <img src="../assets/images/logo.png" alt="" />
          <span style="margin-left: 10px">Информатикаи амали</span>
        </router-link>

        <ul class="menu" :class="isShow ? 'open' : 'hide'">
          <li class="item" v-for="item in menu" :key="item.link" @click="isShow = false">
            <router-link :to="item.link">{{ item.name }}</router-link>
          </li>
        </ul>

        <input type="search" placeholder="Чустучу" class="header__search" />

        <div class="burger" @click="toggle">
          <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 18L20 18" stroke="#ffffff" stroke-width="2" stroke-linecap="round" />
            <path d="M4 12L20 12" stroke="#ffffff" stroke-width="2" stroke-linecap="round" />
            <path d="M4 6L20 6" stroke="#ffffff" stroke-width="2" stroke-linecap="round" />
          </svg>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
a {
  color: #ffffff;
  text-decoration: none;
}

.container {
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
}

ul li {
  list-style: none;
}

.header {
  transition: 0.3s;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 10px 0;
  background: #3c8dbc;
  z-index: 1000;

  &__search {
    outline: none;
    border: 1px solid #757474;
    padding: 2px 5px;
    border-radius: 30px;
    width: 150px;

    @media (max-width: 768px) {
      display: none;
    }
  }

    @media (max-width: 768px) {
      padding: 10px 0;
    }

    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .burger {
        display: none;

        @media (max-width: 768px) {
          display: block;
        }
      }
    }

    .logo {
      img {
        max-width: 40px;
      }
    }

    .menu {
      display: flex;
      align-items: center;
      gap: 20px;
      margin: 0;
      padding: 0;

      &.open {
        display: flex;
      }

      &.hide {
        @media (max-width: 768px) {
          display: none;
        }
      }

      @media (max-width: 768px) {
        padding: 10px 0;
        position: absolute;
        top: 50px;
        left: 0;
        flex-direction: column;
        width: 100%;
        background: #3c8dbc;
      }
    }

    .item {
      position: relative;
      font-size: 14px;
      line-height: 16px;
      padding-bottom: 5px;

      a {
        transition: 0.3s;
        text-transform: uppercase;

        &:not(:last-child) {
          margin-right: 20px;
        }

        &::after {
          content: "";
          background-color: white;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0%;
          height: 2px;
          transition: 0.3s;
        }

        &.router-link-active {
          pointer-events: none;

          &::after {
            width: 50%;
          }
        }

        &:hover {
          &::after {
            width: 50%;
          }
        }
      }
    }
  }

  .header.mini {
    padding: 10px 0;
    box-shadow: 0 0 10px 0 rgba(#000, 0.2);
  }
</style>
