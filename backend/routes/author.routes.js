import { Router } from 'express'
import {
  create,
  getAll,
  getById,
  removeById,
  updateById
} from '../controllers/author.controller.js'

import { adminGuard } from '../middleware/auth.middleware.js'

const router = Router()

router.get('', [getAll])

router.get('/:id', [getById])

router.post('', [...adminGuard, create])

router.patch('/:id', [...adminGuard, updateById])

router.delete('/:id', [...adminGuard, removeById])

export default router