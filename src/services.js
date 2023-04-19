export const buidUrl = (key) => `https://portal-e79e2-default-rtdb.asia-southeast1.firebasedatabase.app/${key}.json`

export const getByKey = async (key) => {
  const data = await fetch(buidUrl(key))
  const json = await data.json()
  return Object.keys(json).map(key => ({
    id: key,
    ...json[key]
  }))
}


