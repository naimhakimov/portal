import { Router } from 'express'
import { adminGuard } from '../middleware/auth.middleware.js'
import { create, getBookById, getAllBook, updateById, removeById } from '../controllers/book.controller.js'

const router = Router()

router.get('', [getAllBook])

router.get('/:id', [getBookById])

router.post('', [...adminGuard, create])

router.patch('/:id', [...adminGuard, updateById])

router.delete('/:id', [...adminGuard, removeById])

export default router