<script setup>
import {reactive, ref} from 'vue'
import {useRouter} from "vue-router";
import {register} from "../services.js";

const router = useRouter()
const isLoading = ref(false)
const registerForm = reactive({
  first_name: '',
  last_name: '',
  email: '',
  password: ''
})

const onSubmit = async () => {
  try {
    isLoading.value = true
    const response = await register(registerForm)
    localStorage.setItem('user', JSON.stringify(response))
    await router.push('/')
  } catch (e) {
    alert(e)
    throw e
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <form class="d-flex justify-content-center align-items-center h-100">
    <div class="card p-4">
      <div class="d-flex mb-3">
        <button
            type="button"
            @click="$router.push('/')"
            class="btn btn-primary btn-sm">
          Асосӣ
        </button>
      </div>
      <h2>Бақайдгирӣ</h2>

      <div class="mb-3">
        <label class="form-label">Ном</label>
        <input v-model="registerForm.first_name" type="text" class="form-control" placeholder="Name" required>
      </div>

      <div class="mb-3">
        <label class="form-label">Насаб</label>
        <input v-model="registerForm.last_name" type="text" class="form-control" placeholder="Name" required>
      </div>

      <div class="mb-3">
        <label class="form-label">Почтаи электронӣ</label>
        <input v-model="registerForm.email" type="email" class="form-control" placeholder="name@example.com" required>
      </div>

      <div class="mb-3">
        <label class="form-label">Парол</label>
        <input v-model="registerForm.password" type="password" class="form-control" required>
      </div>


      <button
          :disabled="isLoading"
          class="btn btn-primary mb-2 d-flex gap-2 align-items-center justify-content-center"
          type="button"
          @click="onSubmit">
        Бақайдгирӣ
        <template v-if="isLoading">
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        </template>
      </button>
      
   
        <a @click="$router.push('/login')"
           role="button"
           class="text-center link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover pointer-event">
          Даромадан
        </a>
   
    </div>
  </form>
</template>

<style scoped>
.card {
  width: 400px;
}
</style>
