import {HTTP} from "./plugins/axios";

export function login(body) {
  return HTTP.post('/login', body)
}

export function register(body) {
  return HTTP.post('/register', body)
}

export function getLecture() {
  return HTTP.get('/lectures')
}

export function getSlides() {
  return HTTP.get('/slides')
}

export function getTasks() {
  return HTTP.get('/tasks')
}

export function getBooks() {
  return HTTP.get('/books')
}

export function getPractice() {
  return HTTP.get('/practices')
}

export function getVideos() {
  return HTTP.get('/videos')
}

export function getMaterials() {
  return HTTP.get('/materials')
}

export function getAuthors() {
  return HTTP.get('/authors')
}
