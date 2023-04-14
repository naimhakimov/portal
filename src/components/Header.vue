<script setup>
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
    name: "Китоб",
    link: "/books",
  },
  {
    name: "Амали",
    link: "/practice",
  },
  {
    name: "Мултимедиа",
    link: "/multimedia",
  },
  {
    name: "Cарчашмахои иловаги аз сомона",
    link: "additional-resources",
  },
  {
    name: "Муалифон",
    link: "/author",
  },
];
</script>

<template>
  <nav class="navbar navbar-expand-xl navbar-dark bg-dark">
    <div class="container">
      <router-link
          to="/"
          class="navbar-brand d-flex align-items-center gap-2"
          href="#"
      >
        <img style="width: 24px" src="../assets/images/logo.png" alt=""/>
        Информатикаи амалӣ
      </router-link>
      <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item"
              v-for="(item, index) in menu.slice(0, 6)"
              :key="index">
            <router-link
                :to="item.link"
                active-class="active"
                class="nav-link"
                aria-current="page"
                href="#"
            >
              {{ item.name }}
            </router-link>
          </li>

          <li class="nav-item dropdown">
            <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
              Бештар
            </a>
            <ul class="dropdown-menu">
              <li v-for="i in menu.slice(6)" :key="i.link">
                <router-link :to="i.link" active-class="active" class="dropdown-item" href="#">
                  {{ i.name }}
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
          />
           <button class="btn btn-outline-success" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>