import {HTTP} from "./plugins/axios";

export const buidUrl = (key) => `https://portal-e79e2-default-rtdb.asia-southeast1.firebasedatabase.app/${key}.json`

export const getByKey = async (key) => {
  const data = await fetch(buidUrl(key))
  const json = await data.json()
  return Object.keys(json).map(key => ({
    id: key,
    ...json[key]
  }))
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