import Author from '../schema/Author.js'

export const getAll = async (req, res, next) => {
  try {
    const data = await Author.find()
    res.send(data)
  } catch (err) {
    next(err)
  }
}

export const getById = async (req, res, next) => {
  try {
    const data = await Author.findById(req.params.id)
    res.send(data)
  } catch (err) {
    next(err)
  }
}



export const create = async (req, res, next) => {
  try {
    const lecture = new Author(req.body)
    const data = await lecture.save()

    res.status(201).json(data)
  } catch (err) {
    next(err)
  }
}

export const updateById = async (req, res, next) => {
  try {
    const data = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(data)
  } catch (err) {
    next(err)
  }
}

export const removeById = async (req, res, next) => {
  try {
    const data = await Author.findOneAndDelete({ _id: req.params.id })
    if (data) {
      return res.json({ message: 'Successfully removed' })
    }
    return res.status(400).json({message: 'Not found lecture'})


  } catch (err) {
    next(err)
  }
}