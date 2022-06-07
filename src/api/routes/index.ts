import { Router } from 'express'
import citiesRouter from './cities'

const router = Router()

router.use('/cities', citiesRouter)

export default router