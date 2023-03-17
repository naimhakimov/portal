<script setup>
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
</script>

<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <a href="/" class="logo"> LOGO </a>

        <ul class="menu">
          <li class="item" v-for="item in menu" :key="item.link">
            <router-link :to="item.link">{{ item.name }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import url(https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic);

a {
  color: #000;
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

// Header
.header {
  transition: 0.3s;
  position: fixed;
  width: 100%;
  padding: 20px 0;
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
  }
  .item {
    position: relative;
    font-size: 14px;
    line-height: 16px;
    padding-bottom: 5px;
    a {
      transition: 0.3s;
      &:not(:last-child) {
        margin-right: 20px;
      }
      &::after {
        content: "";
        background-color: #000;
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
