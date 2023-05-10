<script setup>
import {getTaskById, updateTaskById, createTask, uploadFile, removeFile} from '@/services/http.service'
import { onMounted, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { toast } from '@/plugins/toast'

const router = useRouter()
const route = useRoute()

const task = reactive({ title: '', file: null })

onMounted(async () => {
  const id = route.params['id']
  if (id) {
    const taskData = await getTaskById(id)
    task.title = taskData.title
    task.file = taskData.file
  }
})

async function onSubmit() {
  const paramId = route.params['id']
  if (paramId) {
    await updateTaskById(paramId, task)
    await toast.success('Навсози карда шуд')
  } else {
    await toast.success('Сохта шуд')
    await createTask(task)
  }
  await router.push('/task')
}

async function uploadFileHandler(event) {
  try {
    const file = await uploadFile(event.target.files[0])
    task.file = file.url
  } catch (err) {
    throw err
  }
}

async function deleteFile() {
  try {
    await removeFile(task.file)
    task.file = null
  } catch (e) {
    throw e
  }
}
</script>

<template>
  <div class="card p-3">
    <h3>{{ route.params['id'] ? 'Дохил кардан' : 'Сохтан' }}</h3>
    <div>
      <label>Ном</label>
      <input type="text" class="form-control" v-model="task.title" />
    </div>


    <div>
      <label class="form-label">Файл</label>
      <input
          type="file"
          class="form-control mb-2"
          accept="application/pdf"
          @change="uploadFileHandler($event)"
      />

      <div class="file" v-if="task.file">
        <a target='_blank' :href='URL_FILE + task.file'>PDF</a>
        <div class="file-remove" @click="deleteFile">&times;</div>
      </div>
    </div>

    <button class='btn btn-primary mt-3' @click='onSubmit'>{{ route.params['id'] ? 'Дохил кардан' : 'Сохтан' }}</button>
  </div>
</template>