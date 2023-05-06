import { HTTP } from '@/plugins/axios'

// auth
export function login(body) {
  return HTTP.post('/login', body)
}

// users
export function getUsers() {
  return HTTP.get('/users')
}

export function updateUserById(id, body) {
  return HTTP.patch(`/users/${id}`, body)
}

export function deleteUserById(id) {
  return HTTP.delete(`/users/${id}`)
}

// lectures
export function getLectureList() {
  return HTTP.get('/lectures')
}

export function getLectureById(id) {
  return HTTP.get(`/lectures/${id}`)
}

export function createLecture(body) {
  return HTTP.post('/lectures', body)
}

export function updateLecture(id, body) {
  return HTTP.patch(`/lectures/${id}`, body)
}

export function deleteLectureById(id) {
  return HTTP.delete(`/lectures/${id}`)
}

//slide

export function getSlideList() {
  return HTTP.get('/slides')
}

export function getSlideById(id) {
  return HTTP.get(`/slides/${id}`)
}

export function createSlide(body) {
  return HTTP.post('/slides', body)
}

export function updateSlide(id, body) {
  return HTTP.patch(`/slides/${id}`, body)
}

export function deleteSlideById(id) {
  return HTTP.delete(`/slides/${id}`)
}

//author

export function getAuthorList() {
  return HTTP.get('/authors')
}

export function getAuthorById(id) {
  return HTTP.get(`/authors/${id}`)
}

export function createAuthor(body) {
  return HTTP.post('/authors', body)
}

export function updateAuthor(id, body) {
  return HTTP.patch(`/authors/${id}`, body)
}

export function deleteAuthorById(id) {
  return HTTP.delete(`/authors/${id}`)
}

// practice
export function getPracticeList() {
  return HTTP.get('/practices')
}

export function getPracticeById(id) {
  return HTTP.get(`/practices/${id}`)
}

export function createPractice(body) {
  return HTTP.post('/practices', body)
}

export function updatePractice(id, body) {
  return HTTP.patch(`/practices/${id}`, body)
}

export function deletePracticeById(id) {
  return HTTP.delete(`/practices/${id}`)
}

// book
export function getAllBook() {
  return HTTP.get('/books')
}

export function getBookById(id) {
  return HTTP.get(`/books/${id}`)
}

export function createBook(body) {
  return HTTP.post('/books', body)
}

export function updateBook(id, body) {
  return HTTP.patch(`/books/${id}`, body)
}

export function deleteBookById(id) {
  return HTTP.delete(`/books/${id}`)
}

//materials

export function getMaterials() {
  return HTTP.get('/materials')
}

export function createMaterial(body) {
  return HTTP.post('/materials', body)
}

export function updateMaterial(id, body) {
  return HTTP.patch(`/materials/${id}`, body)
}

export function getMaterialById(id) {
  return HTTP.get(`/materials/${id}`)
}

export function deleteMaterialById(id) {
  return HTTP.delete(`/materials/${id}`)
}

//tasks

export function getTasks() {
  return HTTP.get('/tasks')
}

export function getTaskById(id) {
  return HTTP.get(`/tasks/${id}`)
}

export function createTask(body) {
  return HTTP.post('/tasks', body)
}

export function updateTaskById(id, body) {
  return HTTP.patch(`/tasks/${id}`, body)
}

export function removeTaskById(id) {
  return HTTP.delete(`/tasks/${id}`)
}

//video

export function getVideos() {
  return HTTP.get('/videos')
}


export function getVideoById(id) {
  return HTTP.get(`/videos/${id}`)
}

export function createVideo(body) {
  return HTTP.post('/videos', body)
}

export function updateVideoById(id, body) {
  return HTTP.patch(`/videos/${id}`, body)
}

export function removeVideoById(id) {
  return HTTP.delete(`/videos/${id}`)
}

//file
export function uploadFile(file) {
  return HTTP.post('/files/upload', {
    file
  }, {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
  })
}

export function removeFile(url) {
  return HTTP.post('/files/remove', {
    url
  })
}