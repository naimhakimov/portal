<script setup>
import {resources} from "../config/resources";
import {onMounted, ref} from "vue";
import {getVideos} from "../services";
import {baseURL} from "../plugins/axios.js";

const videos = ref([])

onMounted(async () => {
  videos.value = await getVideos()
})
</script>

<template>
  <div class="p-3">
    <h3>МУЛТИМЕДИА</h3>

    <div class="d-flex flex-wrap gap-3 mb-3">
      <iframe v-for="video in videos" width="100%" height="300px"
              :src="baseURL + video.file" title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>
      </iframe>
    </div>
  </div>
</template>

<style scoped lang="scss">
iframe {

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 576px) {
    height: 100%;
  }
}
</style>