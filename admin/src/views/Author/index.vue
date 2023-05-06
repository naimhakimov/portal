<script setup>
import { onMounted, ref } from 'vue'
import {
  getAuthorList,
  deleteAuthorById,
  removeFile,
} from '@/services/http.service'

const lectureList = ref([])

onMounted(async () => {
  lectureList.value = await getAuthorList()
})

async function removeLecture(item) {
  const isDelete = confirm('Оё шумо дар ҳақиқат мехоҳед нест кунед?')
  if (isDelete) {
    await removeFile(item.file)
    await deleteAuthorById(item._id)
    lectureList.value = lectureList.value.filter(
      (lecture) => lecture._id !== item._id
    )
  }
}

</script>

<template>
  <div>
    <div class="d-flex justify-content-between">
      <h1>Муаллифон</h1>
      <button
        class="btn btn-primary btn-sm align-self-baseline"
        @click="$router.push('/author/create')"
      >
        Сохтани муаллиф
      </button>
    </div>
    <ul class="list-group">
      <li class="list-group-item" v-for="item in lectureList" :key="item._id">
        <div class="d-flex justify-content-between">
          {{ item.description.slice(0, 60)  + '...'}}

          <div class="btn-group">
            <button class="btn btn-danger" @click="removeLecture(item)">
              &times;
            </button>
            <button
              class="btn btn-primary"
              @click="$router.push('/author/edit/' + item._id)"
            >
              Таҳрир
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>