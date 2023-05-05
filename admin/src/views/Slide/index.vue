<script setup>
import {onMounted, ref} from 'vue'
import {
  createSlide,
  deleteSlideById,
  getSlideList,
  removeFile,
} from '@/services/http.service'

const lectureList = ref([])

onMounted(async () => {
  lectureList.value = await getSlideList()
})

async function removeLecture(item) {
  const isDelete = confirm('Оё шумо дар ҳақиқат мехоҳед нест кунед?')
  if (isDelete) {
    await removeFile(item.file)
    await deleteSlideById(item._id)
    lectureList.value = lectureList.value.filter(
        (lecture) => lecture._id !== item._id
    )
  }
}

async function create() {
  if (file.value && title.value) {
    const lecture = await createSlide({
      title: title.value,
      file: file.value,
    })
    lectureList.value = [...lectureList.value, lecture]
    title.value = file.value = null
  }
}
</script>

<template>
  <div>
    <div class="d-flex justify-content-between">
      <h1>Слайдхо</h1>
      <button
          class="btn btn-primary btn-sm align-self-baseline"
          @click="$router.push('/slide/create')"
      >
        Сохтани слайд
      </button>
    </div>
    <ul class="list-group">
      <li class="list-group-item" v-for="item in lectureList" :key="item._id">
        <div class="d-flex justify-content-between">
          {{ item.title }}

          <div class="btn-group">
            <button class="btn btn-danger" @click="removeLecture(item)">
              &times;
            </button>
            <button
                class="btn btn-primary"
                @click="$router.push('/slide/edit/' + item._id)"
            >
              Таҳрир
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>