import Slide from '../schema/Slide.js'

export const getSlides = async (req, res, next) => {
  try {
    const data = await Slide.find()
    res.send(data)
  } catch (err) {
    next(err)
  }
}

export const create = async (req, res, next) => {
  try {
    const lecture = new Slide(req.body)
    const data = await lecture.save()

    res.status(201).json(data)
  } catch (err) {
    next(err)
  }
}

export const getSlideById = async (req, res, next) => {
  try {
    const data = await Slide.findById( req.params.id)
    res.json(data)
  } catch (err) {
    next(err)
  }
}

export const updateById = async (req, res, next) => {
  try {
    const data = await Slide.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(data)
  } catch (err) {
    next(err)
  }
}

export const removeById = async (req, res, next) => {
  try {
    const data = await Slide.findOneAndDelete({ _id: req.params.id })
    if (data) {
      return res.json({ message: 'Successfully removed' })
    }
    return res.status(400).json({message: 'Not found lecture'})


  } catch (err) {
    next(err)
  }
}