<script setup>
import {reactive, ref} from 'vue'
import {apiUrl} from "../config/api";
import {useRouter} from "vue-router";

const router = useRouter()
const isLoading = ref(false)
const registerForm = reactive({
  first_name: '',
  email: '',
  password: ''
})

const onSubmit = async () => {
  try {
    isLoading.value = true
    const response = await fetch(apiUrl + '/register', {
      method: 'POST',
      body: JSON.stringify(registerForm),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (response.status === 400) {
      throw 'Такой e-mail уже существует'
    } else if (response.status === 500) {
      throw 'Упс! Что-то пошло не так.\n'
    } else {
      const user = await response.json()
      localStorage.setItem('user', JSON.stringify(user))
      await router.push('/')
    }
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
          На главную
        </button>
      </div>
      <h2>Регистрация</h2>

      <div class="mb-3">
        <label class="form-label">Ваша имя</label>
        <input v-model="registerForm.first_name" type="text" class="form-control" placeholder="Name" required>
      </div>

      <div class="mb-3">
        <label class="form-label">Email</label>
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
        Регистрация
        <template v-if="isLoading">
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        </template>
      </button>
      <div class="d-flex justify-content-end">
        у вас есть аккаунт &nbsp;
        <a @click="$router.push('/login')"
           role="button"
           class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover pointer-event">
          вход
        </a>
      </div>
    </div>
  </form>
</template>

<style scoped>
.card {
  width: 400px;
}
</style>