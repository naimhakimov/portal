import {Router} from 'express'
import {adminGuard} from '../middleware/auth.middleware.js'
import {getSlideById, getSlides, create, removeById, updateById} from "../controllers/slide.controller.js";

const router = Router()

router.get('', [getSlides])

router.get('/:id', [getSlideById])

router.post('', [...adminGuard, create])

router.patch('/:id', [...adminGuard, updateById])

router.delete('/:id', [...adminGuard, removeById])

export default router