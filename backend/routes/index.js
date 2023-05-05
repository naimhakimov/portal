import { Router } from 'express'

import AuthRoutes from './auth.routes.js'
import FileRoutes from './file.routes.js'
import UserRoutes from './user.routes.js'
import LectureRoutes from './lecture.routes.js'
import TaskRoutes from './task.routes.js'
import MaterialRoutes from './material.routes.js'
import VideoRoutes from './video.routes.js'
import SlideRoutes from './slide.routes.js'

const router = Router()

router.use('/', AuthRoutes)
router.use('/files', FileRoutes)
router.use('/users', UserRoutes)
router.use('/lectures', LectureRoutes)
router.use('/tasks', TaskRoutes)
router.use('/materials', MaterialRoutes)
router.use('/videos', VideoRoutes)
router.use('/slides', SlideRoutes)

export default router