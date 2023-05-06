<script setup>
import { onMounted, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import {
  createAuthor,
  updateAuthor,
    getAuthorById
} from '@/services/http.service'
import { toast } from '@/plugins/toast'

const lecture = reactive({ description: '' })
const route = useRoute()
const router = useRouter()

onMounted(async () => {
  if (route.params.id) {
    const lectureData = await getAuthorById(route.params.id)
    lecture.description = lectureData.description
  }
})

async function onSubmit() {
  try {
    if (route.params.id) {
      await updateAuthor(route.params.id, lecture)
      await toast.success('Навсози карда шуд')
    } else {
      await createAuthor(lecture)
      await toast.success('Сохта шуд')
    }
    await router.push('/author')
  } catch (err) {
    throw err
  }
}
</script>

<template>
  <div class="mb-3 card p-3">
    <h3>{{ route.params.id ? 'Дохил кардан' : 'Сохтан' }}</h3>

    <div>
      <label class="form-label">Тавсиф</label>
      <textarea v-model="lecture.description" class="form-control" rows="12"></textarea>
    </div>

    <button
      :disabled="!lecture.description"
      class="btn btn-primary mt-2"
      @click="onSubmit"
    >
      {{ route.params.id ? 'Дохил кардан' : 'Сохтан' }}
    </button>
  </div>
</template>