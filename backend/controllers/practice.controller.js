import Practice from '../schema/Practice.js'

export const getAll = async (req, res, next) => {
  try {
    const data = await Practice.find()
    res.send(data)
  } catch (err) {
    next(err)
  }
}

export const create = async (req, res, next) => {
  try {
    const lecture = new Practice(req.body)
    const data = await lecture.save()

    res.status(201).json(data)
  } catch (err) {
    next(err)
  }
}

export const getById = async (req, res, next) => {
  try {
    const data = await Practice.findById( req.params.id)
    res.json(data)
  } catch (err) {
    next(err)
  }
}

export const updateById = async (req, res, next) => {
  try {
    const data = await Practice.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(data)
  } catch (err) {
    next(err)
  }
}

export const removeById = async (req, res, next) => {
  try {
    const data = await Practice.findOneAndDelete({ _id: req.params.id })
    if (data) {
      return res.json({ message: 'Successfully removed' })
    }
    return res.status(400).json({message: 'Not found lecture'})


  } catch (err) {
    next(err)
  }
}