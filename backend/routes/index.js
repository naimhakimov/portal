import { Router } from 'express'

import AuthRoutes from './auth.routes.js'
import FileRoutes from './file.routes.js'
import UserRoutes from './user.routes.js'
import LectureRoutes from './lecture.routes.js'
import TaskRoutes from './task.routes.js'
import MaterialRoutes from './material.routes.js'
import VideoRoutes from './video.routes.js'
import SlideRoutes from './slide.routes.js'
import AuthorRoutes from './author.routes.js'
import PracticeRoutes from './practice.routes.js'
import BookRoutes from './book.routes.js'

const router = Router()

router.use('/', AuthRoutes)
router.use('/files', FileRoutes)
router.use('/users', UserRoutes)
router.use('/lectures', LectureRoutes)
router.use('/tasks', TaskRoutes)
router.use('/materials', MaterialRoutes)
router.use('/videos', VideoRoutes)
router.use('/slides', SlideRoutes)
router.use('/authors', AuthorRoutes)
router.use('/practices', PracticeRoutes)
router.use('/books', BookRoutes)

export default router