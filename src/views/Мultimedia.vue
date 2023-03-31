<script setup>
import {multi} from "../config/multi";

const videos = multi.videos
</script>

<template>
  <div class="container">
    <h1 class="mt-3">МУЛТИМЕДИА</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi impedit in necessitatibus nemo numquam
      officia perspiciatis, quod ullam! Amet aperiam deleniti earum eum excepturi ipsa iure laborum libero maiores,
      molestiae molestias odio porro possimus quasi rem sequi similique sint voluptas.
    </p>

    <div class="d-flex flex-wrap gap-3 mb-3">
      <iframe v-for="video in videos" width="100%" height="600px"
              :src="video" title="YouTube video player"
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