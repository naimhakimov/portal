<script setup>
import { onMounted, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  createMaterial,
  updateMaterial,
  getMaterialById,
  removeFile,
  uploadFile,
} from '@/services/http.service.js'
import { URL_FILE } from '@/url.js'
import {toast} from '@/plugins/toast.js'

const route = useRoute()
const router = useRouter()

const material = reactive({ title: '', photo: null, description: null })

onMounted(async () => {
  if (route.params['id']) {
    const materialData = await getMaterialById(route.params['id'])
    material.title = materialData.title
    material.photo = materialData.photo
    material.description = materialData.description
    material.link = materialData.link
  }
})

async function uploadFileHandler(key, event) {
  const file = await uploadFile(event.target.files[0])
  material[key] = file.url
}

async function deleteFile(key, id) {
  await removeFile(id)
  material[key] = null
}

async function onSubmit() {
  if (!route.params['id']) {
    await createMaterial(material)
    await toast.success('Сохта шуд')
  } else {
    await updateMaterial(route.params['id'], material)
    await toast.success('Навсози карда шуд')
  }
  await router.push('/material')
}
</script>

<template>
  <div class="mb-3 card p-3">
    <h3>{{ route.params.id ? 'Дохил кардан' : 'Сохтан' }}</h3>

    <label>Ном</label>
    <input
      v-model="material.title"
      type="text"
      class="form-control mb-2"
    />

    <label>Ссылка</label>

    <input
      v-model="material.link"
      type="text"
      class="form-control mb-2"
    />

    <div>
      <label></label>
      <textarea class="form-control" v-model="material.description" name="desc" id="" cols="30" rows="10"></textarea>
    </div>


    <div>
      <label class="form-label">Сурат</label>
      <input
        type="file"
        class="form-control mb-2"
        accept="image/png, image/jpg, image/jpeg"
        @change="uploadFileHandler('photo', $event)"
      />
      <div class="photo" v-if="material?.photo">
        <a :href="URL_FILE + material.photo" target="_blank"
          ><img :src="URL_FILE + material.photo" alt=""
        /></a>
        <div
          class="file-remove"
          @click="deleteFile('photo', material.photo)"
        >
          &times;
        </div>
      </div>
    </div>

    <button
      :disabled="!material.title && !material?.file"
      class="btn btn-primary mt-2"
      @click="onSubmit"
    >
      {{ route.params.id ? 'Дохил кардан' : 'Сохтан' }}
    </button>
  </div>
</template>