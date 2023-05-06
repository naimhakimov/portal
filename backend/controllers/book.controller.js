import Book from '../schema/Book.js'

export const getAllBook = async (req, res, next) => {
  try {
    const data = await Book.find()
    res.send(data)
  } catch (err) {
    next(err)
  }
}

export const create = async (req, res, next) => {
  try {
    const lecture = new Book(req.body)
    const data = await lecture.save()

    res.status(201).json(data)
  } catch (err) {
    next(err)
  }
}

export const getBookById = async (req, res, next) => {
  try {
    const data = await Book.findById(req.params.id)
    res.json(data)
  } catch (err) {
    next(err)
  }
}

export const updateById = async (req, res, next) => {
  try {
    const data = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(data)
  } catch (err) {
    next(err)
  }
}

export const removeById = async (req, res, next) => {
  try {
    const data = await Book.findByIdAndDelete(req.params.id)
    if (data) {
      return res.json({ message: 'Successfully removed' })
    }
    return res.status(400).json({message: 'Not found material'})


  } catch (err) {
    next(err)
  }
}