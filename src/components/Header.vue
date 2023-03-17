<script setup>
import { ref } from "vue";

window.addEventListener("scroll", function () {
  let windowTop = window.pageYOffset;
  if (windowTop > 100) {
    document.querySelector(".header").classList.add("mini");
  } else {
    document.querySelector(".header").classList.remove("mini");
  }
});

if (window.pageYOffset > 100) {
  document.querySelector(".header").classList.add("mini");
} else {
  document.querySelector(".header")?.classList.remove("mini");
}

const menu = [
  {
    name: "Асоси",
    link: "/",
  },
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
        <a href="/" class="logo"> LOGO </a>

        <ul class="menu" :class="isShow ? 'open' : 'hide'">
          <li
            class="item"
            v-for="item in menu"
            :key="item.link"
            @click="isShow = false"
          >
            <router-link :to="item.link">{{ item.name }}</router-link>
          </li>
        </ul>

        <div class="burger" @click="toggle">
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 18L20 18"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M4 12L20 12"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M4 6L20 6"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import url(https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic);

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
  position: relative;
  width: 100%;
  padding: 20px 0;
  background: #333;

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
    font-size: 32px;
    line-height: 42px;
    text-transform: uppercase;
    font-weight: 900;
  }
  .menu {
    display: flex;
    align-items: center;
    gap: 20px;

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
      top: 62px;
      left: 0;
      flex-direction: column;
      width: 100%;
      background: #333;
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
  background-color: #fff;
  box-shadow: 0 0 10px 0 rgba(#000, 0.2);
}
</style>
